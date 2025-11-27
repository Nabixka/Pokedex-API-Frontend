const ability = require("../models/abilityModel")

exports.getAllAbility = async (req, res) => {
    try{
        const list = await ability.getAllAbility()

        res.json({
            message: "Berhasil Mengambil Data Ability",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getAbilityById = async (req, res) => {
    try{
        const list = await ability.getAbilityById(req.params.id)
        if(!list){
            return json.status(404).json({message: "Tidak Menemukan Ability"})
        }
        res.json({
            message: "Berhasil Mendapat Ability",
            data: list
        })
    }
    catch(err){
        if(res.status(404)){
            res.status(404).json({message: "Tidak dapat menemukan Data"})
        }
        else{   
            res.status(500).json({error: err.message})
        }
    }
}

exports.createAbility = async(req, res) => {
    try{
        const list = await ability.createAbility(req.body)
        res.json({
            message: "Berhasil Menambah Ability",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.updateAbility = async (req, res) => {
    try{
        const {name, description} = req.body
        const list = await ability.updateAbility(req.params.id, req.body)
        if(!list){
            return res.status(404).json({error: err.message})
        }

        res.json({
            message: "Berhasil Mengubah Ability",
            data: list
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteAbility = async (req, res) => {
    try{
        const list = await ability.deleteAbility(req.params.id)

        if(!list){
            return res.status(404).json({message: "Ability Tidak Dapat Ditemukan"})
        }
        res.json({
            message: "Berhasil Menghapus Data"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}