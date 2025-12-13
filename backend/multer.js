const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = "uploads";

        if (file.fieldname === "image" && req.baseUrl.includes("pokemon")) {
            folder = "uploads/pokemon";
        }

        if (file.fieldname === "image" && req.baseUrl.includes("games")) {
            folder = "uploads/game/image";
        }

        if (file.fieldname === "file") {
            folder = "uploads/game/download";
        }

        fs.mkdirSync(folder, { recursive: true });
        cb(null, folder);
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.fieldname === "image") {
        return file.mimetype.startsWith("image/")
            ? cb(null, true)
            : cb(new Error("File harus gambar"), false);
    }

    if (file.fieldname === "file") {
        const allowedExt = [".gb", ".gbc", ".gba", ".3ds", ".nds", ".nsp", ".zip"];
        const ext = path.extname(file.originalname).toLowerCase();

        return allowedExt.includes(ext)
            ? cb(null, true)
            : cb(new Error("Format ROM tidak didukung"), false);
    }
};

const uploadPokemon = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
});

const uploadGame = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 1024 }
});

module.exports = { uploadPokemon, uploadGame };
