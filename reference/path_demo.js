// bring in path module
const path = require('path');

// Base file name
console.log(__filename);

// only file name
console.log(path.basename(__filename));

// only directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// Create path object with parse
console.log(path.parse(__filename));

// Create path object , return base
console.log(path.parse(__filename).base);

// Concatonate paths.  helps with using correct delimiters 
console.log(path.join(__dirname, 'test', 'Yo mon'));