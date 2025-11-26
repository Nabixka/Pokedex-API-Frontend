const type = require("../models/typeModel")

exports.getAllType = async (req, res) => {
    try{
        const list = await type.getAllType()
        
        res.json({
            message: "Berhasil Mengambil Type",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.getTypeById = async (req, res) => {
    try{
        const list = await type.getTypeById(req.params.id)
        if(!list){
            return res.status(404).json({ message: "Type TIdak Ada"})
        }
        res.json({
            message: "Berhasil Mengambil Type",
            data: list
        })
    }
    catch (err){
        res.status(500).json({ error: err.message})
    }
}

exports.createType = async (req, res) => {
    try{
        const list = await type.createType(req.body)

        res.json({
            message: "Berhasil Membuat Data",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.deleteType = async (req, res) => {
    try{
        const list = await type.deleteType(req.params.id)
        if(!list){
            return res.status(404).json({ message: "Type TIdak Ada"})
        }
        res.json({
            message: "Berhasil Menghapus Type"
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}

exports.updateType = async (req, res) => {
    try{
        const {name} = req.body
        const list = await type.updateType(req.params.id, name)
        if(!list){
            return res.status(404).json({message: "Type Tidak Ada"})
        }
        res.json({
            message: "Berhasil Mengubah Type",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ error: err.message})
    }
}