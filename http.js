const http = require('http')


http.createServer(function(req,res) {
    req.writeHead(401, (console.log("Server Not Connected")))
    res.write("Server Connected")
    res.end()
}).listen(5000)