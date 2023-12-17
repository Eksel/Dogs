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
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    
    
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

