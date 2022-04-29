const express = require("express")
const app = express()
const path = require("path")

// View Engine init
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use public files
app.use(express.static(path.join(__dirname, "/public")))

const homeController = require("./controllers/homeController")
app.use("/", homeController)
app.use("/about", homeController)
app.use("/contacts", homeController)

// Socket.io logic
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

const chatroomController = require("./controllers/chatroomController")
app.use("/", chatroomController)
app.use("/chatroom/setusername", chatroomController)
app.use("/chatroom/getusername", chatroomController)

let users = []

io.on("connection", (socket) => {
	console.log("a user connected...")
	io.emit("userConnected")

	socket.on("sendUsername", (data) => {
		users.push(data.username)
		console.table(users)
	})
	socket.on("discardUsername", (data) => {
		users.splice(users.indexOf(data.username), 1)
		console.table(users)
	})

	socket.on("disconnect", () => {
		console.log("a user has disconnected...")
	})
})

const PORT = 3000
server.listen(PORT, console.log(`listening on port ${PORT}...`))
