const evol = require("../models/evolModel")

exports.getAllEvol = async (req, res) => {
    try{
        const list = await evol.getAllEvol()
        res.json({
            message: "Berhasil Mengambil Data Evolution",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getEvolById = async (req, res) => {
    try{
        const list = await evol.getEvolById(req.params.id)
        if(!list){
            return res.status(404).json({message: "Tidak Dapat Menemukan Data"})
        }
        res.json({
            message: "Berhasil Mengambil Data",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.createEvol = async (req, res) => {
    try{
        const {stage1, stage2, stage3} = req.body
        const list = await evol.createEvol(req.body)
            res.json({
                message: "Berhasil Membuat Evolution Stage",
                data: list
            })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}