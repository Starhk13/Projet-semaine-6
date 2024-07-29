const express = require('express')
const router = express.Router()
const peopleController = require("../controllers/controller.people")

router.get("/getPeople", peopleController.getPeople)
router.post("/postPeople", peopleController.postPeople)
router.put("/editPeople/:email", peopleController.editPeople)
router.delete("/deletePeople/:email", peopleController.deletePeople)

module.exports = router