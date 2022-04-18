const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const path = require("path")

// View Engine init
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Use public files
app.use(express.static(path.join(__dirname, "/public")))

const homeRoute = require("./routes/home")
app.use("/", homeRoute)
app.use("/about", homeRoute)
app.use("/contacts", homeRoute)

const chatroomRoute = require("./routes/chatroom")
app.use("/", chatroomRoute)

const io = new Server(server)
// io.on("connection", (socket) => {
// 	let connectionInfo = [socket.id, socket.handshake.headers["user-agent"], socket.handshake.time]
// 	io.emit("user has connected")
// 	socket.on("chat message", (msg) => {
// 		io.emit("chat message", msg)
// 	})

// 	socket.on("disconnect", () => {
// 		console.log("A user has disconnected!")
// 	})
// })

const PORT = 3000
app.listen(PORT, console.log(`listening on port ${PORT}...`))
