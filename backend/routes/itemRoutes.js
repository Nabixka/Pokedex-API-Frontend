const express = require("express")
const itemController = require("../controllers/itemController")
const router = express.Router()

router.get("/", itemController.getAllItem)
router.post("/", itemController.createItem)
router.get("/:id", itemController.getItemById)
router.delete("/:id", itemController.deleteItem)

module.exports = router
