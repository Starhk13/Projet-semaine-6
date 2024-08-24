const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../config/database')

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/
const ageRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/

const normalizeString = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

exports.register = async (req, res) => {
    const { firstName, lastName, email, password, age, role = false } = req.body;

    if (!firstName || !lastName || !email || !password || !age) {
        return res.status(400).json({ message: "Tous les champs doivent être remplis" })
    }

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        return res.status(400).json({ message: "Le prénom et le nom doivent comporter au moins 2 caractères et uniquement des lettres." })
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email invalide" })
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Mot de passe invalide. Il doit contenir au moins une majuscule, un chiffre, un caractère spécial et doit avoir au moins 6 caractères." })
    }

    if (!ageRegex.test(age)) {
        return res.status(400).json({ message: "L'âge doit être un nombre" })
    }

    try {
        const [existingUser] = await pool.query(`SELECT * FROM people WHERE email = ?`, [email])
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email déjà utilisé" })
        }

        const formattedFirstName = normalizeString(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase())
        const formattedLastName = normalizeString(lastName.toUpperCase())

        const hashedPassword = await bcrypt.hash(password, 10)
        await pool.query(
            `INSERT INTO people (first_name, last_name, email, password, age, role, registered_at)
            VALUES (?, ?, ?, ?, ?, ?, CURDATE())`,
            [formattedFirstName, formattedLastName, email, hashedPassword, age, role]
        );
        res.json({ message: "Votre compte a bien été créé" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement de l'utilisateur" })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email invalide" })
    }

    try {
        const [rows] = await pool.query(`SELECT * FROM people WHERE email = ?`, [email])
        if (rows.length === 0) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" })
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la connexion" })
    }
}

exports.refreshToken = (req, res) => {
    const { token } = req.body
    if (!token) {
        return res.status(401).json({ message: "Token manquant"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const newToken = jwt.sign({ id: decoded.id, email: decoded.email }, process.env.JWT_SECRET,
        { expiresIn: "1h"})
        res.json({ token: newToken})
    } catch (error) {
        res.status(400).json({ message: "Token invalide"})
    }
}