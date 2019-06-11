const http = require('http');

//Create server object
http.createServer((req, res) => {
	//Write response
	res.write('Hello World');
	res.end();
})
// listen on port 5000 , indicate in console server runnin
.listen(5000, ()=> console.log('Server running...'))

