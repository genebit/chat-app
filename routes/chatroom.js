const express = require("express")
const router = express.Router()

const controller = require("../controllers/chatroomController")
router.get("/chatroom/", controller.index)
router.post("/chatroom/", (req, res) => {
	const username = req.body.username
})

module.exports = router
