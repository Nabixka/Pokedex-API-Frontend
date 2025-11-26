const express = require("express")
const router = express.Router();
const pokemonController = require("../controllers/pokemonController")

router.get("/", pokemonController.getAllPokemon)
router.post("/", pokemonController.createPokemon)
router.get("/:id", pokemonController.getPokemonById)
router.delete("/:id", pokemonController.deletePokemon)
router.put("/:id", pokemonController.updatePokemon)

module.exports = router