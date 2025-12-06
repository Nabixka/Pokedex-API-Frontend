const gen = require("../models/genModel")

exports.getAllGen = async (req, res) => {
    try{
    const list = await gen.getAllGen()

    res.status(200).json({
        status: 200,
        message: "Berhasil Mengambil Data Gen",
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

exports.createGen = async (req, res) => {
    try{
        const { no } = req.body

        if(!no){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar"
            })
        }

        const exist = await gen.getGenByNo(no)
        if(exist){
            return res.status(409).json({
                status: 409,
                message: `Gen ${no} Sudah Ada`
            })
        }

        const list = await gen.createGen(req.body)

        res.status(201).json({
            status: 201,
            messahe: "Berhasil Membuat Data Gen",
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

exports.getGenById = async (req, res) => {
    try{
        const {id} = req.params
        
        const list = await gen.getGenById(id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Generasi Tidak Ditemukan"
            })
        }
        else{   
            
            res.status(200).json({
                status: 200,
                message: "Berhasil Mengambil Data Generasi",
                data: list
            })
        }
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.deleteGen = async (req, res) => {
    try{
        const {id} = req.params

        
        const exist = await gen.getGenById(id)
        
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Data Generasi Tidak DItemukan"
            })
        }
        const list = await gen.deleteGen(id)
        
        res.status(200).json({
            status:200,
            message: "Berhasil Menghapus Data"
        })

    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.updateGen = async (req, res) => {
    try{
        const {no} = req.body
        const {id} = req.params

        const exist = await gen.getGenById(id)

        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Data Generasi Tidak Ada"
            })
        }

        if(!no){
            return res.status(400).json({
                status: 400,
                message: "Isi Dengan Benar"
            })
        }

        const conflict = await gen.getGenByNo(no)

        if(conflict){
            return res.status(409).json({
                status: 409,
                message: "Generasi Sudah Ada"
            })
        }


        const list = await gen.updateGen(no, id)

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Data Generasi",
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