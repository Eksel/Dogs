const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dogsSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    views: {
        type: Number,
        required:true
    },
    gender: {
        type: String,
        required: true 
    },
    breed: {
        type: String,
        required: true 
    },
    breedName: {
        type: String,
        required: true 
    },
    age: {
        type: Number,
        required: true 
    },
    weight: {
        type: Number,
        required: true 
    },
    image: {
        type: String,
        required: false 
    }
}, {timestamps: true})

module.exports = mongoose.model("Dog", dogsSchema)

// "id": "0",
// "name": "Suzi",
// "views": "180",
// "gender": "suka",
// "breed": "Bernenski_pies_pasterski",
// "breedName": "Berneński pies pasterski",
// "age": "7 tygodni",
// "weight": "14 kg",
// "image" : "./dog0.jpg"