const express = require("express")
const router = express.Router()
const gameController = require("../controllers/gameController")
const { uploadGame } = require("../multer")

router.get("/", gameController.getGame)
router.get("/:id", gameController.getGameById)
router.delete("/:id", gameController.deleteGame)
router.post("/", uploadGame.single("image"), gameController.createGame)
router.put("/:id", uploadGame.single("image"), gameController.updateGame)

module.exports = router