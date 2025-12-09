const express = require("express")
const router = express.Router();
const pokemonController = require("../controllers/pokemonController")
const { uploadPokemon } = require("../multer")

router.get("/", pokemonController.getAllPokemon)
router.post("/", uploadPokemon.single("image"), pokemonController.createPokemon)
router.get("/:id", pokemonController.getPokemonById)
router.delete("/:id", pokemonController.deletePokemon)
router.put("/:id", uploadPokemon.single("image"), pokemonController.updatePokemon)

module.exports = router