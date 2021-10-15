var photos = ["image/1.jpg", "image/2.jpg", "image/3.png"]; 
var val = document.querySelector("#img2");  
var  cnt = 0; 

function prev() {
    cnt--;
    if ( cnt <= 0 ) {
        cnt = photos.length-1; 
        val.src = photos[cnt]; 
    }
    else { 
        val.src = photos[cnt];  
    }
}

function next() {
    cnt++;
    if ( cnt >= photos.length) {
        cnt = 0; 
        val.src = photos[cnt]; 
    }
    else { 
        val.src = photos[cnt];  
    }
}

