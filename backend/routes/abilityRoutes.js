const express = require("express")
const abilityController = require("../controllers/abilityController")
const router = express.Router()

router.get("/", abilityController.getAllAbility)
router.get("/:id", abilityController.getAbilityById)
router.post("/", abilityController.createAbility)
router.put("/:id", abilityController.updateAbility)
router.delete("/:id", abilityController.deleteAbility)

module.exports = router