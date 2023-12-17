class first_class {
    constructor(){
    
    }
    first_method(){
        console.log("The value is ..");

    }

    second_method(){
        console.log("The value is ..");

    }
}

class second_class extends first_class{


    // method overriding the constructor is is called using a super keyword that helps to call the parent constructor. and we can add the methods on it. 
    constructor(name, number){
        super();
        this.name = name;
        this.number = number;
        console.log(`The name is ${this.name} And the value is the ${this.number}`);

    }
    third_method(){
        consol.log("The value is..");

    }
}

let a = new second_class("Rushi", 8936489493);
console.log(a);