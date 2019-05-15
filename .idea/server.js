var http = require('http');
var rs = require('./modulo');// con esta linea traemos nuestro modulo, se puede importar un paquete json
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter(); // yo creo una variable que me va a buscar el disparador de ese evento
// creo un manejador de eventos

var handler = function() {
    console.log('se disparo el evento');
}

eventEmitter.on('evento',handler);
http.createServer( function(req,res) {

        var q = url.parse(req.url,true);
        var f = '.' + q.pathname;
        fs.readFile(f,function (err, data) {
            if(err){
                res.writeHead(404,{'Content-type':'text/html'});
                return res.end('hubo un error')
            }else{
                res.writeHead(200,{'Content-type':'text/html'});
                return res.end('anduvo bien')

            }
        })
    }
).listen(8080);
