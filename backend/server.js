const express = require('express')
const port = 3000
const app = express()
const pokemonRoutes = require("./routes/pokemonRoutes")
const regionRoutes = require("./routes/regionRoutes")
const typeRoutes = require("./routes/typeRoutes")

app.use(express.json());
app.use("/pokemon", pokemonRoutes)
app.use("/region", regionRoutes)
app.use("/type", typeRoutes)

app.listen(port, () => {
    console.log("SERVER BERJALAN di PORT: ", port)
})