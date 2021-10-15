
// variable declear
var a = 10; 
var d = 234.544; 
var b = true; 
var ch = 'c'; 
var str = "mdshohed"; 

var n = 10; 
var s = "100"; 

//console.log(n); 
document.write(typeof(n)); 
document.write(typeof(s));

// Integer to string convert 
n = toString(n); 
// string to integer convert 
s = parseInt(s); 
// string to float
d = parseFloat(d); 

document.write(typeof(n)); 
document.write(typeof(s)); 
document.write(typeof(d));

// Float value fixed decimal place 
document.write(d.toFixed(8)); 
// 234.544 = 23; 
document.write(d.toPrecision(2)); 

// string + string 
document.write(str+s); 

s = "mdshohed";
document.write(s.length); 
document.write(s.charAt(2)); 