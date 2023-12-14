require('dotenv').config()

const express = require("express")
const dogsRouter = require("./routes/dogs")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
app.use((res,req,next) => {
    console.log(req.path,req.method)
    next()
})

app.use("/api/dogs",dogsRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log(`Connected to database and running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

