var http = require('http');
var jsdom = require('jsdom');
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');

var port = 1337;

var index = '<!DOCTYPE html>' 
+ '<html>' 
+ '<body>' 
+ '<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>'
+ '<h1>File Upload Space</h1>' 
+ '<form action="/upload" method="post">' 
+ 'Select a file: <input type="file" id="selectbtn" onchange="var path = this.value; getFileInfo(path, this.files[0])">' 
+ '<a onclick="alert(\'File submitted\')" id="submit" type="submit">SUBMIT</a>' 
+ '<script>' 
+ 'var uploadFile;' 
+ 'function getFileInfo(path, file){' 
+ 'path = path.replace("fakepath", "");' 
+ 'var fileName = path.substring(4, path.length); console.log(fileName);' 
+ 'var fileExtension = fileName.substring(fileName.lastIndexOf("."), fileName.length); console.log(fileExtension);' 
+ 'uploadFile = file;' 
+ 'setLinkLocation(fileName, fileExtension);' 
+ '}' 
+ 'function setLinkLocation(fileName, fileExtension){' 
+ 'var a = document.getElementById("submit");' 
+ 'var link = "/upload?file=" + fileName + "&extension=" + fileExtension;' 
+ 'a.href = link;' 
+ '}' 
+ '</script>' 
+ '</form>' 
+ '</body>' 
+ '</html>';

http.createServer(function (req, res) {
	
	if (req.url === '/') {
		
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(index);
	}
	if (req.url.startsWith('/upload')) {
		var queries = req.url.substring('/upload'.length + 1, req.url.length);
		var fileData = queryString.parse(queries);
		
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		index += '<h3>File Data:</h3><p>Name: ' + fileData.file + '</p><p> Extension: <strong>' + fileData.extension + '</strong></p><button onclick="makePostRequest()">Save file</button><script>function makePostRequest(){'
+ '$.post( "/save", uploadFile, function( data ) {'
+ 'console.log(data);'
+ '}, "json");'
+ '}</script>';
		res.end(index);
	}
	
	if (req.url === '/save') {
		var query = url.parse(req.url, true);
		console.log(query);
		if (query.query.file) {
			var stream = fs.createReadStream('./downloads/' + query.query.file);
			stream.on('error', function (error) {
				res.writeHead(404, { 'content-type': 'text/plain' });
				res.write(http.STATUS_CODES[404]);
				res.end();
			});
			res.writeHead(200);
			stream.pipe(res);
			stream.on('end', function () {
				res.end();
			});
		}
		else {
			res.writeHead(400, { 'content-type': 'text/plain' });
			res.write(http.STATUS_CODES[400]);
			res.end();
		}
	} 

	res.end();
}).listen(port);

console.log('Server running on port: ' + port);




