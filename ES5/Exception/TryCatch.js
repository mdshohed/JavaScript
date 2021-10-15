document.querySelector("#checkbutton").addEventListener("click", function() {
    var val = document.querySelector("#name").value;
    
    try {
        if ( val<5) {
            throw "input is too low"; 
        }
        else if(val>10) {
            throw "Input is high"; 
        }
    }catch(e){
        alert(e);  
    }
})