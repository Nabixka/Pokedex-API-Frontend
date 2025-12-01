const region = require("../models/regionModel")

exports.createRegion = async (req, res) => {
    try{
        const list = await region.createRegion(req.body)
        res.status(201).json({
            status: 201,
            message: "Berhasil Menambah Region",
            data: list
        })
    }
    catch (err){
        res.status(500).json({ 
            status: 500,
            error: err.message })
    }
}

exports.getAllRegion = async (req, res) => {
    try{
        const list = await region.getAllRegion()
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Region",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.getRegionById = async (req, res) => {
    try{
        const list = await region.getRegionById(req.params.id)
        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Data"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Region",
            data: list
        })
    }
    catch(err){
        res.status(500).message({
            status: 500,
            error: err.message})
    }
}

exports.deleteRegion = async (req, res) => {
    try{
    const list = await region.deleteRegion(req.params.id)
    if(!list){
        return res.status(404).json({ 
            status: 404,
            message: "Tidak Ada Region"})
    }
    res.status(200).json({
        status: 200,
        message: "Berhasil Menghapus Region",
    })
    }
    catch (err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.updateRegion = async (req, res) => {
    try{
        const {name} = req.body
        const {id} = req.params
        
        const exist = await region.getRegionById(id)

        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Region"})
        }

        const list = await region.updateRegion(id, name)
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Region",
            data: list
        })
    }
    catch (err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}