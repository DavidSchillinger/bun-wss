import {file, serve} from 'bun'

const server = serve({
	port: '4040',
	fetch() {
		return new Response(file('index.html'))
	},
})

console.log(`Listening on localhost:${server.port}`)
