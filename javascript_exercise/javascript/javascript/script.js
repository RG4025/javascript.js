
class getElement {
    constructor(){
        console.log("The costructor is called..");

    }

    submit(){
        alert(`The name your typed is ${this.name} And Number is ${this.number} Thank you..`);

    }

    cancel(){
        alert("The canceled value is :");

    }

    fill(name, number){
        this.name = name;
        this.number = number;

    }
    
}

let rushi = new getElement();
let gurav = new getElement();

gurav.fill("Gurav", 972897023);
rushi.fill("Rushi", 8936962389);

rushi.submit();

// it will overright the passed value by reassignning the value to it 
rushi.fill("gauri" , 782372323);
rushi.submit();
// gurav.submit();

rushi.cancel()


