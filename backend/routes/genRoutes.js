const express = require("express")
const router = express.Router()
const genController = require("../controllers/genController")

router.get("/", genController.getAllGen)
router.post("/", genController.createGen)
router.get("/:id", genController.getGenById)
router.delete("/:id", genController.deleteGen)
router.put("/:id", genController.updateGen)


module.exports = router