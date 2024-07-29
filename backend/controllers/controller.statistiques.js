const pool = require('../config/database')

exports.updateStatistiques = (req, res) => {
    const newNumbers = req.body.numbers

    pool.query(`UPDATE statistiques SET active_users = ?, questions_answered = ?,
        av_session_length = ?, starting_knowledge = ?, current_knowledge = ?,
        knowledge_gain = ? WHERE id = ? `, [newNumbers[0], newNumbers[1], newNumbers[2], 
        newNumbers[3], newNumbers[4], newNumbers[5], req.body.id], 
        function(error, results, fields) {
            if (error) {
                console.error(error);
                res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour des statistiques"});
                return;
            }
            res.json({ message: "Les statistiques ont bien été mises à jour"})
        }
    )
}

