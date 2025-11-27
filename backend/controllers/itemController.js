const item = require("../models/itemModel")

exports.getAllItem = async(req, res) => {
    try{
        const list = await item.getAllItem()

        res.json({
            message: "Berhasil Mengambil Data Item",
            data: list
        })

    }
    catch(err){
        res.status(500).json({error: err.message})
    }
} 

exports.createItem = async(req, res) => {
    try{
        const {name, description, category} = req.body
        const list = await item.createItem(req.body)
        res.json({
            message: "Berhasil Menambah Item",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getItemById = async(req, res) => {
    try{
        const list = await item.getItemById(req.params.id)
        if(!list){
            return res.status(404).json({ message: "Data Tidak Ditemukan"})
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

exports.deleteItem = async (req, res) => {
    try{
        const list = await item.deleteItem(req.params.id)
        if(!list){
            return res.status(404).json({message: "Tidak Menemukan Item"})
        }
        res.json({
            message: "Berhasil Menghapus Data"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}