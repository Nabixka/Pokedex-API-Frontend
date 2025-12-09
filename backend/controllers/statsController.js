const stats = require("../models/statsModel")

exports.getAllStats = async (req, res) => {
    const list = await stats.getAllStats()

    res.status(200).json({
        status: 200,
        message: "Berhasil Mendapatkan Data Stats",
        data: list
    })
}

exports.getStatsById = async (req, res) => {

    const list = await stats.getStatsById(req.params.id)
    if(!list){
        return res.status(404).json({
            status: 404,
            message: "Stats Pokemon Tidak Ada"
        })
    }

    res.status(200).json({
        status: 200,
        message: "Berhasil Mendapatkan Data Stats",
        data: list
    })
}