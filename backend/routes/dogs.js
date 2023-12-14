const express = require("express")
const Advert = require("../models/DogsAdvert")
const router = express.Router()
const {getAdverts,getSingleAdverts,createAdvert,deleteAdvert,updateAdvert} = require("../controllers/advertsContorller")

router.get("/", getAdverts)

router.get("/:id", getSingleAdverts)

router.post("/", createAdvert)

router.delete("/:id", deleteAdvert)

router.patch("/:id", updateAdvert)


module.exports = router
