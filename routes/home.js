const express = require("express")
const router = express.Router()

const controller = require("../controllers/homeController")
router.get("/", controller.index)
router.get("/about", controller.about)
router.get("/contacts", controller.contacts)

module.exports = router
