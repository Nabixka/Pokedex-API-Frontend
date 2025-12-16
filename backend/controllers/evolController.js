const evol = require("../models/evolModel")

exports.getEvol = async (req, res) => {
    try {
        const list = await evol.getEvol()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Evolution Pokemon",
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

exports.getEvolById = async (req, res) => {
    try {
        const list = await evol.getEvolById(req.params.id)
        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Evolution TIdak Ada"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Evolution Pokemon",
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

exports.deleteEvol = async (req, res) => {
    try {  
        const {id} = req.params

        const exist = await evol.getEvolById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Evolution Tidak Ada"
            })
        }
        const list = await evol.deleteEvol(id)
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Evolution"
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.updateEvol = async (req, res) => {
    try {
        const { pre_stage, post_stage, method } = req.body
        if (!pre_stage) {
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar WOk"
            })
        }

        const list = await evol.updateEvol({ pre_stage, post_stage, method }, req.params.id)

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Evolution",
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

exports.createEvol = async (req, res) => {
    try{
        const {pre_stage, post_stage, method} = req.body
        if(!pre_stage){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await evol.createEvol({pre_stage, post_stage, method})
        res.status(201).json({
            status: 201,
            message: "Berhasil Menambahkan Evolution",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.getEvolutionChain = async (req, res) => {
    const {id} = req.params
    const list = await evol.getEvolutionChain(id)

    res.json({
        data: list
    })
}