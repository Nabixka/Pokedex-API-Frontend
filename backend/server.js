const express = require('express')
const port = 3000
const app = express()
const cors = require("cors")
const pokemonRoutes = require("./routes/pokemonRoutes")
const regionRoutes = require("./routes/regionRoutes")
const typeRoutes = require("./routes/typeRoutes")
const abilityRoutes = require("./routes/abilityRoutes")
const itemRoutes = require("./routes/itemRoutes")
const evolRoutes = require("./routes/evolRoutes")
const genRoutes = require("./routes/genRoutes")
const gameRoutes = require("./routes/gameRoutes")


app.use(express.json());
app.use(cors())
app.use("/uploads", express.static("uploads"))
app.use("/pokemon", pokemonRoutes)
app.use("/region", regionRoutes)
app.use("/type", typeRoutes)
app.use("/ability", abilityRoutes)
app.use("/items", itemRoutes)
app.use("/evolution", evolRoutes)
app.use("/gen", genRoutes)
app.use("/game", gameRoutes)


app.listen(port, () => {
    console.log("SERVER BERJALAN di PORT: ", port)
})