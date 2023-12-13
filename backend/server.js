require('dotenv').config()

const express = require("express")
const dogsRouter = require("./routes/dogs")

const app = express()

app.use("/api/dogs",dogsRouter)

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})