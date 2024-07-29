require('dotenv').config()
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

async function testConnection() {
    try {
        await pool.query('SELECT 1');
        console.log("Connecté à MySQL.");
    } catch (err) {
        console.error("Erreur lors de l'exécution de la requête :", err);
    }
}

testConnection()

module.exports = pool;