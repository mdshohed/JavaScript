for(var i = ; i<3; i++ ) {
    document.querySelectorAll(".audio")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        audioPlay(text); 
        animation(text);  
    } 
}

function audioPlay(text) {
    var text =this.innerHTML; 
    switch(text) {
        case "a": 
            var audio = new Audio("");
            audio.play();
            break;
        case "b": 
            var audio = new Audio("");
            audio.play();
            break;
        case "c": 
            var audio = new Audio("");
            audio.play();
            break;
    }
});

function animation(text) {
    var val = document.querySelector("."+text ); 
    val.classList.add("anim"); 
    setTimeout(function() {
        selectedButton.classList.remove("anim");
    },1000);  
}
