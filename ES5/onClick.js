// text change
function myMessage1() {
    var val = document.querySelector("#paragraph");
    val.innerHTML = "you are clicked button 1";   
}
function myMessage2() {
    var val = document.querySelector("#paragraph");
    val.innerHTML = "you are clicked button 2";
}

// Image call
function myMessage3() {
    var val = document.querySelector("#img");
    val.src = "image/mdshohed.jpg"; 
}

// EvenListen
/* 
clicked 
mouseover
mouseout
*/
document.querySelector("#EvenListen").addEventListener( "click", function() {
    alert("Hello"); 
}); 
