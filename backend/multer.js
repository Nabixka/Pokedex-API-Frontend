const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb){
        const cleanName = file.originalname.replace(/\s+/g, "_")
        const unique = Date.now() + "-" + cleanName;
        cb(null, unique)
    }
})

const upload = multer({storage: storage})

module.exports = upload