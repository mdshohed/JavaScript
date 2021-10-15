const ara = [2, 4, 1, 5];
for(let i of ara) {
    document.write( i + "\n" );
}
document.write( "<br/>"); 

let func = {
    name: 'mdshohed', 
    id: 10, 
    age: 23, 
    section: 1
}
for(let i in func) {
    document.write( i + "\n" );
}

document.write("<br/>");
for(let i in func) {
    document.write(  `${i}: ${func[i]}` + "\n" );
}

func.forEach(function(x){
    document.write(x + "\n" );
});  
document.write("<br/>");