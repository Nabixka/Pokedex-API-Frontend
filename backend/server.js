const express = require('express')
const port = 3000
const app = express()
const cors = require("cors")
const pokemonRoutes = require("./routes/pokemonRoutes")
const regionRoutes = require("./routes/regionRoutes")
const typeRoutes = require("./routes/typeRoutes")
const abilityRoutes = require("./routes/abilityRoutes")
const itemRoutes = require("./routes/itemRoutes")

app.use(express.json());
app.use(cors())
app.use("/pokemon", pokemonRoutes)
app.use("/region", regionRoutes)
app.use("/type", typeRoutes)
app.use("/ability", abilityRoutes)
app.use("/items", itemRoutes)

app.listen(port, () => {
    console.log("SERVER BERJALAN di PORT: ", port)
})