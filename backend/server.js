const express = require('express')
const port = 3000
const app = express()
const pokemonRoutes = require("./routes/pokemonRoutes")
const regionRoutes = require("./routes/regionRoutes")

app.use(express.json());
app.use("/pokemon", pokemonRoutes)
app.use("/region", regionRoutes)

app.listen(port, () => {
    console.log("SERVER BERJALAN di PORT: ", port)
})