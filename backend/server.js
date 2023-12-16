require('dotenv').config()

const express = require("express")
const dogsRouter = require("./routes/dogs")
const mongoose = require('mongoose');
const cors = require("cors");
const app = express()



app.use(cors({
    origin: 'https://papito.onrender.com'
  }));
app.use(express.json())
app.use((res,req,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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

