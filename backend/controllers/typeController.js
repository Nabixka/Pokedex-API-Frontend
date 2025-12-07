const type = require("../models/typeModel")

function toPascalCase(str) {
    return str
        .toLowerCase()
        .split(/[\s\-_]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}


exports.getAllType = async (req, res) => {
    try{
        const list = await type.getAllType()
        
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Type",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.getTypeById = async (req, res) => {
    try{
        const list = await type.getTypeById(req.params.id)
        if(!list){
            return res.status(404).json({ 
                status: 404,
                message: "Type TIdak Ada"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Type",
            data: list
        })
    }
    catch (err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.createType = async (req, res) => {
    try{
        let {name} = req.body

        name = toPascalCase(name)
        
        const newName = { name }

        const list = await type.createType(newName)

        res.status(201).json({
            status: 201,
            message: "Berhasil Membuat Data",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.deleteType = async (req, res) => {
    try{
        const list = await type.deleteType(req.params.id)
        if(!list){
            return res.status(404).json({ 
                status: 404,
                message: "Type TIdak Ada"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Type"
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}

exports.updateType = async (req, res) => {
    try{
        const {id} = req.params
        let {name} = req.body

        name = toPascalCase(name)

        const newName = { name }

        const exist = await type.getTypeById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Type Tidak Ada"})
        }

        const list = await type.updateType(id, newName)
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Type",
            data: list
        })
    }
    catch(err){
        res.status(500).json({ 
            status: 500,
            error: err.message})
    }
}