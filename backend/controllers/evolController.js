const evol = require("../models/evolModel")
const pokemon = require("../models/pokemonModel")

exports.getAllEvol = async (req, res) => {
    try {
        const list = await evol.getAllEvol()
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Evolution",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.getEvolById = async (req, res) => {
    try {
        const list = await evol.getEvolById(req.params.id)
        if (!list) {
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Data"
            })
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Berhasil Mengambil Data",
                data: list
            })
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.createEvol = async (req, res) => {
    try {
        const { stage1, stage2, stage3 } = req.body

        const stage3_pokemon = stage3 || null

        if (!stage1 || !stage2) {
            return res.status(400).json({
                status: 400,
                message: "Stage 1 & 2 Wajib Di isi"
            })
        }

        const exist1 = await pokemon.getPokemonById(stage1)
        if(!exist1){
            return res.status(404).json({
                status: 404, 
                message: "Pokemon Tidak Ada"
            })
        }

        const exist2 = await pokemon.getPokemonById(stage2)
        if(!exist2){
            return res.status(404).json({
                status: 404, 
                message: "Pokemon Tidak Ada"
            })
        }

        if(stage3){
            const exist3 = await pokemon.getPokemonById(stage3)
            if(!exist3){
                return res.status(404).json({
                    status: 404,
                    message: "Pokemon Tidak Ada"
                })
            }
        }


        const list = await evol.createEvol({ stage1, stage2, stage3: stage3_pokemon })
        res.status(201).json({
            status: 201,
            message: "Berhasil Membuat Evolution Stage",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.deleteEvol = async (req, res) => {
    try {
        const list = await evol.deleteEvol(req.params.id)

        if (!list) {
            return res.status(404).json({
                status: 404,
                message: "Tidak Ada Data"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus data"
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.updateEvol = async (req, res) => {
    try {
        const { id } = req.params
        const { stage1, stage2, stage3 } = req.body

        const exist = await evol.getEvolById(id)
        if (!exist) {
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Data Evolution"
            })
        }

        if (!stage2) {
            return res.status(400).json({
                status: 400,
                message: "Wajib Isi Stage 2"
            })
        }

        const list = await evol.updateEvol(id, stage1, stage2, stage3)
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Line Evolution",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}