const express = require("express")
const router = express.Router();
const pokemonController = require("../controllers/pokemonController")
const upload = require("../multer")

router.get("/", pokemonController.getAllPokemon)
router.post("/", upload.single("image"), pokemonController.createPokemon)
router.get("/:id", pokemonController.getPokemonById)
router.delete("/:id", pokemonController.deletePokemon)
router.put("/:id", upload.single("image"), pokemonController.updatePokemon)

module.exports = router