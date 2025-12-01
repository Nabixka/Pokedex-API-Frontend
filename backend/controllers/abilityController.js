const ability = require("../models/abilityModel")

exports.getAllAbility = async (req, res) => {
    try{
        const list = await ability.getAllAbility()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Ability",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "TIdak Dapat Terhubung Ke Server"
        })
    }
}

exports.getAbilityById = async (req, res) => {
    try{
        const list = await ability.getAbilityById(req.params.id)
        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Menemukan Ability"})
        }
        else{
        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapat Ability",
            data: list
        })
        }
    }
    catch(err){
            res.status(500).json({
                status: 500,
                error: err.message
                //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.createAbility = async(req, res) => {
    try{
        const { name, description} = req.body

        if( !name || !description ){
            return res.status(400).json({
                status: 400,
                message: "Nama atau description Tidak di isi"
            })
        }
        else{
            const list = await ability.createAbility(req.body)
            res.status(201).json({
                status: 201,
                message: "Berhasil Menambah Ability",
                data: list
            })
        }
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.updateAbility = async (req, res) => {
    try{
        const {name, description} = req.body
        const list = await ability.updateAbility(req.params.id, req.body)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Data"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Ability",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
        })
    }
}

exports.deleteAbility = async (req, res) => {
    try{
        const list = await ability.deleteAbility(req.params.id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Ability Tidak Dapat Ditemukan"})
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Data"
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            error: err.message
            //message: "Tidak Dapat Terhubung Ke Server"
            })
    }
}