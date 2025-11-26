const region = require("../models/regionModel")

exports.createRegion = async (req, res) => {
    try{
        const list = await region.createRegion(req.body)
        res.json({
            message: "Berhasil Menambah Region",
            data: list
        })
    }
    catch (err){
        res.status(500).message({ error: err.message })
    }
}

exports.getAllRegion = async (req, res) => {
    try{
        const list = await region.getAllRegion()
        res.json({
            message: "Berhasil Mengambil Data Region",
            data: list
        })
    }
    catch(err){
        res.status(500).message({error: err.message})
    }
}

exports.getRegionById = async (req, res) => {
    try{
        const list = await region.getRegionById(req.params.id)
        if(!list){
            res.status(404).message({message: "Tidak Dapat Menemukan Data"})
        }
        res.json({
            message: "Berhasil Mengambil Data Region",
            data: list
        })
    }
    catch(err){
        res.status(500).message({error: err.message})
    }
}