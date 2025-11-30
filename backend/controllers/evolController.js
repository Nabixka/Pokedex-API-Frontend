const evol = require("../models/evolModel")

exports.getAllEvol = async (req, res) => {
    try{
        const list = await evol.getAllEvol()
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Evolution",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.getEvolById = async (req, res) => {
    try{
        const list = await evol.getEvolById(req.params.id)
        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Data"})
        }
        else{
            res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data",
            data: list
        })
        }
    }
    catch(err){
        res.status(500).json({
            status: 200,
            error: err.message})
    }
}

exports.createEvol = async (req, res) => {
    try{
        const {stage1, stage2, stage3} = req.body
        const list = await evol.createEvol(req.body)
            res.status(201).json({
                status: 201,
                message: "Berhasil Membuat Evolution Stage",
                data: list
            })
    }
    catch(err){
        res.status(500).json({
            status: 200,
            error: err.message})
    }
}

exports.deleteEvol = async (req, res) => {
    try{
        const list = await evol.deleteEvol(req.params.id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Ada Data"})
        }
            res.status(200).json({
                status: 200,
                message: "Berhasil Menghapus data"
            })
    }
    catch(err){
        res.status(500).json({
            status: 200,
            error: err.message})
    }
}