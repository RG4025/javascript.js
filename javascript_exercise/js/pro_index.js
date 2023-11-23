
const loadScript = (src) =>{
    return new Promise((resolve , reject) =>{
        let script = document.createElement("scripe");
        script.type = "text/javascript";
        script.src = src;
            document.body.appendChild(script);
            script.onload = (script) => {
                resolve ("Script has been loaded succesfully...");

            }
            script.onerror = () => {reject(0)};
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
}).then((value) =>{
    console.log("The second script is ready..");

}).catch((error) => {
    console.log("We are failed to accesing the script Sorry for the inconvenience cost!...");
})
