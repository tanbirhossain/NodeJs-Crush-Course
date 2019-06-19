const url = require("url");

const myUrl = new URL("https://www.youtube.com:80/watch?v=fBNz5xF-Kx4");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host);
// Hostname (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
//Serialied query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append("abc","123");
console.log(myUrl.searchParams);