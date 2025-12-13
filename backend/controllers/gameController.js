const game = require("../models/gameModel")

exports.getGame = async (req, res) => {
    try {
        const list = await game.getGame()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Game",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.getGameById = async (req, res) => {
    try {
        const list = await game.getGameById(req.params.id)
        if (!list) {
            return res.status(404).json({
                status: 404,
                message: "Game Tidak Ada"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengambil Data Game",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.updateGame = async (req, res) => {
    try {
        const {id} = req.params
        const {name, gen_id, console, developer, format} = req.body

        const imageUrl = req.file
        ? `http://localhost:3000/uploads/game/image/${req.file.filename}`
        : null

        const fileUrl = req.file
            ? `http://localhost:3000/uploads/game/download/${req.file.filename}`
            : null;

        const exist = await game.getGameById(id)

        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Game"
            })
        }

        if(!name || !gen_id || !imageUrl || !console || !developer || !fileUrl || !format){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar WOk"
            })   
        }

        const list = await game.updateGame(id, {name, gen_id, image: imageUrl, console, developer, file: fileUrl, format})
        res.status(200).json({
            status:200,
            message: "Berhasil Mengupdate Data Gam",
            data: list
        })

    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.createGame = async (req, res) => {
    try {
        const { name, gen_id, console, developer, format } = req.body
        const imageUrl = req.file
            ? `http://localhost:3000/uploads/game/image/${req.file.filename}`
            : null

        const fileUrl = req.file
            ? `http://localhost:3000/uploads/game/download/${req.file.filename}`
            : null;

        if (!name || !imageUrl || !gen_id || !console || !developer || !fileUrl || !format) {
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar WOk"
            })
        }

        const exist = await game.getGameName(name)
        if(exist){
            return res.status(409).json({
                status: 409,
                message: "Nama Sudah Ada"
            })
        }

        const list = await game.createGame({ name, image: imageUrl, gen_id, console, developer, file: fileUrl, format })
        res.status(201).json({
            status: 201,
            message: "Berhasil Membuat Game",
            data: list
        })

    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

exports.deleteGame = async (req, res) => {
    try {
        const list = await game.deleteGame(req.params.id)
        if (!list) {
            return res.status(404).json({
                status: 400,
                message: "Tidak Dapat Menemukan Data Game"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Data Game"
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}