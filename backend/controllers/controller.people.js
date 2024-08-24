const pool = require("../config/database")

exports.getPeople = async (req, res) => {
    
    try {
        const [rows] = await pool.query(`SELECT * FROM people`)
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des données"})
    }
}

exports.postPeople = async (req, res) => {
    const newUser = req.body;

    try {
        await pool.query(
            `INSERT INTO people (first_name, last_name, email, age, role, registered_at) 
            VALUES (?, ?, ?, ?, ?, CURDATE())`,
            [newUser.firstName, newUser.lastName, newUser.email, newUser.age, newUser.role]);
        res.json({ message: "Les données ont bien été enregistrées"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement des données"});
    }
}

exports.deletePeople = async (req, res) => {
    const email = req.params.email

    try {
        await pool.query(`DELETE FROM people WHERE email = ?`, [email])
        res.status(200).json({ message: "L'utilisateur a été supprimé."})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'utilisateur"})
    }
}

exports.editPeople = async(req, res) => {
    const email = req.params.email
    const userEdit = req.body

    try {
        await pool.query(`UPDATE people SET first_name = ?, last_name = ?, age = ?, email = ?, role = ? WHERE email = ?`,
            [userEdit.firstName, userEdit.lastName, userEdit.age, userEdit.email, userEdit.role, email])
            res.status(200).json({ message: "Les données de l'utilisateur ont bien été mises à jour"})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Une erreur est survenue lors de la mise à jour des données"})
    }
}