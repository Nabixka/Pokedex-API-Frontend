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

        if(!/^\d+$/.test(no)){
            return res.status(400).json({
                status: 400,
                message: "Isi yang Benar"
            })
        }

        const exist = await gen.getGenByNo(no)
        if(exist){
            return res.status(409).json({
                status: 409,
                message: `Gen ${no} Sudah Ada`
            })
        }

        const data ={
            no : parseInt(no, 10)
        }

        const list = await gen.createGen(data)

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
        let {no} = req.body
        const {id} = req.params

        if(!no){
            return res.status(400).json({
                status: 400,
                message: "Isi Dengan Benar"
            })
        }

        if(!/^\d+$/.test(no)){
            return res.status(400).json({
                status: 400,
                message: "Isi yang Benar"
            })
        }

        const exist = await gen.getGenById(id)

        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Data Generasi Tidak Ada"
            })
        }

        const conflict = await gen.getGenByNo(no)

        if(conflict){
            return res.status(409).json({
                status: 409,
                message: "Generasi Sudah Ada"
            })
        }

        number = {
            no: parseInt(no, 10)
        }


        const list = await gen.updateGen(number.no, id)

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