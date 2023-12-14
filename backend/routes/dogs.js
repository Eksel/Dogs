const express = require("express")
const Advert = require("../models/DogsAdvert")
const router = express.Router()

router.get("/", (res,req) => {
    res.json({mssg: "get all"})
})
router.post("/", async (res,req) => {
    const {name,views,gender,breed,breedName,age,weight,image} = req.body
    try{
        const advert = await Advert.create({name,views,gender,breed,breedName,age,weight,image})
        res.statusCode(200).json(advert)
    }catch(error){
        res.statusCode(400).json({error : error.message})
    }
    res.json({mssg: "get all"})
})


module.exports = router
