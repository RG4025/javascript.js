function loadScript(src , callbacks) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("loaded script with src : " + src);
        callbacks(null, src);
    }

    script.onerror = function (){
        console.log("Error loading script with src : " + src);
        callbacks(new Error("src got some error"));

    }

    document.body.appendChild(script);

}


function hello(error, src){
    
    if(error){
        console.log(error);
        return;
        
    }
    alert("hello world!", +src);
}

function goodmorning(error, src){

    if(error){
        console.log(error);
        return;
    }
    alert("Good morning!" + src);

}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" , goodmorning);