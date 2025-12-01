const item = require("../models/itemModel")

exports.getAllItem = async(req, res) => {
    try{
        const list = await item.getAllItem()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Item",
            data: list
        })

    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
} 

exports.createItem = async(req, res) => {
    try{
        const {name, description, category} = req.body
        const list = await item.createItem(req.body)

        if(!name || !description || !category){
            return res.status(400).json({
                status: 400,
                message: "Isi Name, Description, Category dengan benar"
            })
        }
        res.status(201).json({
            status: 201,
            message: "Berhasil Menambah Item",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.getItemById = async(req, res) => {
    try{
        const list = await item.getItemById(req.params.id)
        if(!list){
            return res.status(404).json({ 
                status: 404,
                message: "Data Tidak Ditemukan"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.deleteItem = async (req, res) => {
    try{
        const list = await item.deleteItem(req.params.id)
        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Menemukan Item"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Data"
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message})
    }
}

exports.updateItem = async (req, res) => {
    try{
        const {id} = req.params
        const {name, description, category} = req.body

        const exist = await item.getItemById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Item Tidak Ditemukan"
            })
        }

        if(!name || !description || !category){
            return res.status(400).json({
                status: 400,
                message: "Isi Name, Description, Category dengan benar"
            })
        }
        
            const list = await item.updateItem(id, req.body)
            res.status(200).json({
                status: 200,
                message: "Berhasil Mengupdate Data",
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