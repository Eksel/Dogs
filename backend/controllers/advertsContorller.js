const express = require("express");
const Advert = require("../models/DogsAdvert")
const mongoose = require("mongoose")

const getAdverts = async (req,res) => {
    const dogs = await Advert.find({}).sort({createdAt: -1})
    res.status(200).json(dogs)
}
const getSingleAdverts = async (req,res) => {
    const {id} = req.params

    const advert = await Advert.findById(id)
    if(!advert){
        return res.status(404).json({error : "Brak w bazie"})
    }
    return res.status(200).json(advert)
}
const createAdvert = async (req,res) => {
    const {name,views,gender,breed,breedName,age,weight,image} = req.body
    try{
        const advert = await Advert.create({name,views,gender,breed,breedName,age,weight,image})
        res.status(200).json(advert)
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
const deleteAdvert = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Brak w bazie"})
    }
    const advert = await Advert.findOneAndDelete({_id: id})
    if(!advert){
        return res.status(404).json({error : "Blad w usuwaniu"})
    }
    res.status(200).json(advert)
}
const updateAdvert = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Brak w bazie"})
    }
    const advert = await Advert.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!advert){
        return res.status(404).json({error : "Blad w usuwaniu"})
    }
    res.status(200).json(advert)

}


module.exports = {
    getAdverts,
    getSingleAdverts,
    createAdvert,
    deleteAdvert,
    updateAdvert
}