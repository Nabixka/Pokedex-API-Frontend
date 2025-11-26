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
        res.status(500).json({ error: err.message })
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
        res.status(500).json({error: err.message})
    }
}

exports.getRegionById = async (req, res) => {
    try{
        const list = await region.getRegionById(req.params.id)
        if(!list){
            return res.status(404).json({message: "Tidak Dapat Menemukan Data"})
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

exports.deleteRegion = async (req, res) => {
    try{
    const list = await region.deleteRegion(req.params.id)
    if(!list){
        return res.status(404).json({ message: "Tidak Ada Region"})
    }
    res.json({
        message: "Berhasil Menghapus Region",
    })
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}

exports.updateRegion = async (req, res) => {
    try{
        const {name} = req.body
        const list = await region.updateRegion(req.params.id, name)
        if(!list){
            return res.status(404).json({message: "Tidak Dapat Menemukan Region"})
        }
        res.json({
            message: "Berhasil Mengubah Region",
            data: list
        })
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}