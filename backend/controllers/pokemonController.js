const pokemon = require("../models/pokemonModel")

exports.createPokemon = async (req, res) => {
    try{
        const list = await pokemon.createPokemon(req.body)
        res.json({
            message: "Berhasil Menambah Pokemon",
            data: list
        })
    }
    catch (err){
        res.status(500).json({ error: err.message})
    }
}

exports.getAllPokemon = async (req, res) => {
    try{
        const list = await pokemon.getAllPokemon()
        res.json({
            message: "Berhasil Mengambil Data Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.getPokemonById = async (req, res) => {
    try{
        const list = await pokemon.getPokemonById(req.params.id)
        if (!list){
            res.status(404).json({ message: "Pokemon Tidak ada"})
        }
        res.json({
            message: "Berhasil Mengambil Data Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deletePokemon = async (req, res) => {
    try{
        const list = await pokemon.deletePokemon(req.params.id)
        if(!list){
            return res.status(404).json({ message: "Pokemon Tidak Ada"})
        }
        res.json({
            message: "Berhasil Menghapus Pokemon"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.updatePokemon = async (req, res) => {
    try{
        const {name, description, weight, height, region_id} = req.body

        const list = await pokemon.updatePokemon(req.params.id, name, description, weight, height, region_id)
        if(!list){
            res.json({
                message: "Tidak Ada Pokemon"
            })
        }
        res.json({
            message: "Berhasil Update Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}