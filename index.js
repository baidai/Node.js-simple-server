const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if(req.url === '/'){
	// 	fs.readFile(path.join(__dirname, '/public', 'index.html'),
	// 	 (err, content) =>{
	// 	 	if (err) throw err;
	// 	 	res.writeHead(200, {'Content-Type': 'text/html'});
	// 	res.end(content);})	
	// }
	// if(req.url === '/about'){
	// 	fs.readFile(path.join(__dirname, '/public', 'about.html'),
	// 	 (err, content) =>{
	// 	 	if (err) throw err;
	// 	 	res.writeHead(200, {'Content-Type': 'text/html'});
	// 	res.end(content);})	
	// }
	// if(req.url === '/api/users'){
	// 	const users = [
	// 	{name: 'Bob Smith', age: 40},
	// 	{name: 'Yo mon', age: 11}
	// 	];
	// 	res.writeHead(200, {'Content-Type': 'application/json'})
	// 	fs.readFile(path.join(__dirname, '/public', 'about.html'),
	// 	 (err, content) =>{
	// 	 	if (err) throw err;
	// // 	 	res.writeHead(200, {'Content-Type': 'text/html'});
	// // 	res.end(JSON.stringify(users));
	// }
	let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url);
	// Extension of file to load content
	let extname = path.extname(filePath);

	// Initial content type
	let contentType = 'text/html';

	//check ext and set content type
	switch(extname){
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.json':
				contentType = 'application/json';
				break;
			case '.jpg':
				contentType = 'image/jpg';
				break;
	}

	// read file
	fs.readFile(filePath, (err, content)=> {
		if(err){
			if(err.code =='ENOENT') {
				//page not found
				fs.readFile(path.join(__dirname,'public','404'), (err, content) => {
					res.writeHead(200, {'Content-Type': 'text/html'});
					res.end(content, 'utf8');	
					});
			} else {
				// Some server error
				res.writeHead(500);
				res.end(`Server Error:${err.code}`);
			}
		} else {
			// success
			res.writeHead(200, {'Content-Type': contentType});
			res.end(content,'utf8');	
			}
		});
	});
	


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// res.end('<h1>Home</h1>'); # prints Home 
//use nodemon so dont need to restart server after changes
// to use nodemon update package.json
//scripts:{'start':'node index', 'dev': 'nodemon index'},
// run site: npm run dev  