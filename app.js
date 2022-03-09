const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const path = require('path')
const PORT = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
	res.render('home', {
		
	})
})

io.on('connection', (socket) => {
	let connectionInfo = [ socket.id, socket.handshake.headers['user-agent'], socket.handshake.time ]
	console.log(`A user connected at ${connectionInfo[2]}`)

    io.emit('user connect')

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg)
	})

	socket.on('disconnect', () => {
		console.log('A user has disconnected!')
	})
})

server.listen(PORT, console.log(`listening on port ${PORT}`))
