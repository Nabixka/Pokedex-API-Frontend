const pokemon = require("../models/pokemonModel")

exports.createPokemon = async (req, res) => {
    try{
        const {name, description, weight, height, region_id, pokedex_id, type1, type2} = req.body

        const type2value = type2 || null

        const imageUrl = req.file
            ? `http://localhost:3000/uploads/${req.file.filename}`
            : null;

        if(!name || !description || !weight || !height || !region_id || !imageUrl || !pokedex_id || !type1 ){
            return res.status(400).json({
                status: 400,
                message: "Isi Data Pokemon Dengan Lengkap"
            })
        }

        const list = await pokemon.createPokemon({
            name, description, weight, height, region_id, image: imageUrl, pokedex_id, type1, type2: type2value
        })

        res.status(201).json({
            status: 201,
            message: "Berhasil Menambah Pokemon",
            data: list
        })
    }
    catch (err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.getAllPokemon = async (req, res) => {
    try{
        const list = await pokemon.getAllPokemon()
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.getPokemonById = async (req, res) => {
    try{
        const list = await pokemon.getPokemonById(req.params.id)
        if (!list){
            return res.status(404).json({ 
                status: 404,
                message: "Pokemon Tidak ada"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.deletePokemon = async (req, res) => {
    try{
        const list = await pokemon.deletePokemon(req.params.id)
        if(!list){
            return res.status(404).json({ 
                status: 404,
                message: "Pokemon Tidak Ada"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Pokemon"
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.updatePokemon = async (req, res) => {
    try{
        const {name, description, weight, height, region_id, pokedex_id, type1, type2} = req.body
        const {id} = req.params

        const type2value = type2 || null

        const imageUrl = req.file
            ? `http://localhost:3000/uploads/${req.file.filename}`
            : null

        const exist = await pokemon.getPokemonById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Pokemon TIdak Ada"
            })
        }
        
        const list = await pokemon.updatePokemon(id, {name, description, weight, height, region_id, image: imageUrl, pokedex_id, type1, type2: type2value})
        res.status(200).json({
            status: 200,
            message: "Berhasil Update Pokemon",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}
