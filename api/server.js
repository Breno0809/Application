const http = require('http')
const app = require('./app')

const port = process.env.PORT || 8989
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`> Server listening in http://localhost:${port}`)
})