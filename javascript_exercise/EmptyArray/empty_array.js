

        // the first comma creates the empty array but the last comma is igored .
        const arr = [, "name", "number ", , " address", ,]
        console.log(arr.length);










        // object literals
        /*
        const sales = "Toyota";

        function carTypes(name) {
            return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
        }

        const car = { myCar: "Saturn", getCar: carTypes("auddi"), special: sales };

        console.log(car.myCar); // Saturn
        console.log(car.getCar); // Honda
        console.log(car.special); // Toyota


        // nesting the obejct literals within the object  literals

        const new_car = {first: "swift", second : "thar"};
        console.log(new_car);
        console.log(new_car.first);

        const new_car2 = { manycars : {1: "swift", 2 : "thar" , 3 : "cruiser"}, bikes: "bullet" };
        console.log(new_car2.manycars[3]);
        console.log(new_car2.bikes);
*/

        /*
        function first_func (){
            setTimeout ( () =>{
                let a = new Promise((resolve, reject) => {
                  resolve [30];
                   
                })
                if(resolve){
                    console.log(`The promise is confirmed with  the value of ${a} `);
                }
                

            }, 3000)
        }
        first_func();
        */

        /*
            let promises = new Promise( function (resolve, reject) {
                console.log("The promise one is still pending ...");
                setTimeout(() =>{
                    resolve (true);
                    console.log("The value is succesfully resolved.");
                    
                }, 2000)
            })
      

        promises.then((value) =>{
            console.log();
        },error((err) =>{
            error("you have one error..");
        }));


        */

       


        /*

        let a = new Promise((resolve, reject) => {
            console.log("The first promise is working please fill the two values for further proceed ..");
            setTimeout(() => {


                let p = prompt("Enter the first number to add..");
                let q = prompt("Enter the second number to add..");
                p = Number.parseInt(p);
                q = Number.parseInt(q);

                let sum = p + q;

                
                if (sum >= 0) {
                    console.log("The first promise is resolved succesfully")
                    resolve (sum);
                }
                else {
                    console.log("The first promise is rejected .. because of you entered wrong parameters.." + p + " And " + q);
                    reject (new Error("Wrong Parameters.."));
                }

            }, 3000);
        });


        a.then((value) => {
            console.log(value);

        }, (error) => {
            console.log("Error is coming for you..");

        });

        */
