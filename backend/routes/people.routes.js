const express = require('express')
const router = express.Router()
const peopleController = require("../controllers/controller.people")
const authenticateToken = require("../middleware/authMiddleware")

router.get("/getPeople", authenticateToken, peopleController.getPeople)
router.post("/postPeople", authenticateToken, peopleController.postPeople)
router.put("/editPeople/:email", authenticateToken, peopleController.editPeople)
router.delete("/deletePeople/:email", authenticateToken, peopleController.deletePeople)

module.exports = router