const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl);
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);