const express = require("express")
const typeController = require("../controllers/typeController")
const router = express.Router()

router.get("/", typeController.getAllType)
router.get("/:id", typeController.getTypeById)
router.post("/", typeController.createType)
router.delete("/:id", typeController.deleteType)
router.put("/:id", typeController.updateType)

module.exports = router