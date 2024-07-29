const express = require('express')
const router = express.Router()
const statistiquesController = require('../controllers/controller.statistiques')

router.get("/", (req, res) => {
    res.json({ message: "Voici les statistiques"})
})

router.post("/", (req, res) => {
    res.json({ message: "Les statistiques ont bien été envoyées"})
})

router.put('/updateStatistiques', statistiquesController.updateStatistiques)

router.delete("/", (req, res) => {
    res.json({ message: "Les statistiques ont bien été supprimées"})
})
module.exports = router