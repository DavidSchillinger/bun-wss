import {serve} from 'bun'

const server = serve({
	port: 3030,
	fetch(request, server) {
		server.upgrade(request)
	},
	websocket: {
		async open(ws) {
			console.log(`Connection opened: ${ws.remoteAddress}`)
			ws.send(JSON.stringify({type: 'welcome', message: 'Welcome!'}))
		},
		async close(ws) {
			console.log(`Connection closed: ${ws.remoteAddress}`)
		},
		async message(ws, message) {
			console.log(`Received: ${message}`)
			ws.send(message)
		},
	},
})

console.log(`Listening on localhost:${server.port}`)
