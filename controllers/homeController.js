const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.render("home/index")
})
router.get("/about", (req, res) => {
	res.render("home/about")
})
router.get("/contacts", (req, res) => {
	res.render("home/contacts")
})

module.exports = router
