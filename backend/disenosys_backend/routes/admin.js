const express = require("express")
const { RegisterUser, LoginUser } = require("../controllers/admin.js")


const router = express.Router()

router.post("/register",RegisterUser)
router.post("/login",LoginUser)

module.exports = router