var http = require('http');
var port = 3000;
var fs = require('fs');
var jade = require('jade');
var path = require('path');

var models = require('./models/models');
var templateFilePath = 'index.jade';
var outputFilePath = 'index.html';
var output;
var template;

fs.readFile(templateFilePath, 'utf-8', function (err, content) {
    if (err) throw err;
    template = jade.compile(content, {
        filename: path.join('./', 'index.jade'),
        pretty: true
    });
    output = template(models);

    fs.writeFile(outputFilePath, output, 'utf-8', function (err) {
        if (err) throw err;
        console.log('Template parsed');
    });
});

http.createServer(function(request, response){
    if(request.url === '/'){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(output);
    }
    if(request.url === '/phones'){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        models.products = models.phones;
        output = template(models);
        response.end(output);
    }
    if(request.url === '/tablets'){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        models.products = models.tablets;
        output = template(models);
        response.end(output);
    }
    if(request.url === '/wearables'){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        models.products = models.wearables;
        output = template(models);
        response.end(output);
    }
}).listen(port);

console.log('Server listening on port: ' + port);