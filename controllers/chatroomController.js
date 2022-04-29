const express = require("express")
const router = express.Router()

let username

router.get("/chatroom/", (req, res) => {
	if (username == undefined) return res.redirect("/")

	res.render("chatroom/index", { username: username })
})
router.post("/chatroom/setusername", (req, res) => {
	username = req.body.username
	if (username == undefined) return res.status(400).send(false)

	return res.status(200).send(true)
})

router.get("/chatroom/getusername", (req, res) => {
	return res.send(username)
})

module.exports = router
