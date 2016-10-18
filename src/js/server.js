import http from 'http'
import fs from 'fs'

let localIP = '192.168.5.143'
let port = 8080

let index = fs.readFileSync('./views/index.html')

let sayHello = (req, res) => {

  console.log("We've got a request for " + req.url)

  res.writeHead(200, {'Content-Type': 'text/html'})

  res.write(index)

  res.end()
}

let server = http.createServer(sayHello)

server.listen(port, localIP);

console.log('Server running at http://'+ localIP +':'+ port +'/');
