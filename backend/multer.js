const multer = require("multer")

const storage = (folder) => multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./uploads/${folder}`);
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})

const uploadGame = multer({storage: storage("game")})
const uploadPokemon = multer({storage: storage("pokemon")})

module.exports = { uploadGame, uploadPokemon }
