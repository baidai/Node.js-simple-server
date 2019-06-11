const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Folder created...');
});

//create and write to a file 
const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(path.join(__dirname, 'test', 'message.txt'), data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//add on to a file
const data1 = new Uint8Array(Buffer.from('Onde vc estar Node.js?'));
fs.appendFile(path.join(__dirname, 'test', 'message.txt'), data1, (err) => {
  if (err) throw err;
  console.log('The file has been appended!');
});

//read file
fs.readFile(path.join(__dirname, '/test', 'message.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});