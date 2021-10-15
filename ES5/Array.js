var a = [ "mdshohed", "rahim", "karim"]; 
var b = ["kamal", "jamal"];
b = a.concat(b);

// Arrey input: 
var ara = new Array();
//var n = parseInt(prompt(""));
for(var i = 0; i<n; i++) {
    //ara[i] = parseInt(prompt("")); 
}


// Array sort.
ara = ara.sort(); 
ara = ara.reverse();

// first value remove: 
ara.shift();

// splice method: first method add value, second method remove value,
ara.splice( 2, 0, "mdshohed", "rahim"); 

// custom array.

function student(name,age,id,batch) {
    this.name = name; 
    this.age = age; 
    this.id = id; 
    this.batch = batch;
    this.output = function() {
        document.write(this.name + " " + this.age + " " + this.id + " " + this.batch + "<br/>");
    };
}

var a = new student("mdshohed",22, 234, 51);
var b = new student("kamal", 23, 444, 52);
var c = new student( "jolil", 23, 334, 42);
var d = new student("tusar", 25, 543, 23);

a.output(); 
b.output(); 
c.output(); 

