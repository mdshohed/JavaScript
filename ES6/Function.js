//ES5
// function add(x,y) {
//     let sum = x+y;
//     document.write(sum); 
// }
// add(2,5); 

// //ES6
// const add = (x,y) => {
//     return x+y; 
// }
// document.write(add(3,4));  


function addNumber(x,y,z) {
    return x + y + z; 
}
let number = [1,2,4];
document.write( addNumber(...number) + "<br />");

let a = [3,5,1];
let b = [5,6,32, 6];
let c = [...a, ...b];
document.write( c + "<br />"); 

// Object 
function studentInfo(name, age) {
    return {
        name: name,
        age: age
    }
}

document.write("mdshohed", 23 + "<br />"); 

// let node = {
//     fun:function() {
//         return "hello world"; 
//     }
// }

let node = {
    fun() {
        return "hello world"; 
    }
}
document.write(node.fun() + "<br />");  