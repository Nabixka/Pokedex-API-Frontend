const express = require("express")
const router = express.Router()
const gameController = require("../controllers/gameController")
const { uploadGame } = require("../multer")

router.get("/", gameController.getGame)
router.get("/:id", gameController.getGameById)
router.delete("/:id", gameController.deleteGame)
router.post("/", uploadGame.fields([{name: "image", maxCount: 1}, {name: "file", maxCount: 1}]), gameController.createGame)
router.put("/:id", uploadGame.fields([{name: "image", maxCount: 1}, {name: "file", maxCount: 1}]), gameController.updateGame)

module.exports = router