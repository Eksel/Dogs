const express = require("express")

const router = express.Router()

router.get("/", (res,req) => {
    res.json({mssg: "get all"})
})


module.exports = {
    router
}