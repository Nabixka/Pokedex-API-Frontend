const express = require("express")
const router = express.Router()
const regionController = require("../controllers/regionController")

router.get("/", regionController.getAllRegion)
router.get("/:id", regionController.getRegionById)
router.post("/", regionController.createRegion)
router.delete("/:id", regionController.deleteRegion)
router.put("/:id", regionController.updateRegion)

module.exports = router