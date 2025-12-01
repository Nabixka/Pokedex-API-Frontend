const express = require("express")
const router = express.Router()
const evolController = require("../controllers/evolController")

router.get("/", evolController.getAllEvol)
router.get("/:id", evolController.getEvolById)
router.post("/", evolController.createEvol)
router.delete("/:id", evolController.deleteEvol)
router.put("/:id", evolController.updateEvol)

module.exports = router