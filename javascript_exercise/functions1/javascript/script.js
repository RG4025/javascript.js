  
        // simple function..
        function first_fun(){
            console.log("Hello from function..");

        }

        first_fun();    

        // parametarized function..

        function second_fun(value){
            return value * value;


        }

        // let get_value = second_fun(10);
        // console.log(get_value);

       console.log(second_fun(3));
  
        // function working with objects..
        function third_fun(user) {
            return `The value of the first key ${user.name} is And Second key is ${user.id}`;

        }

        const user = {
            name: "Rushi",
            id : 4025,


        }

        const getting_value = third_fun(user);
        console.log(getting_value);

       
        // immediately invoked function expression

        (
            function iife() {
                console.log("This hii from iife function..");
                
                 
            }

            
        )();

      
        // executing object using iife function and table..
        (
            () => {
                console.table({
                    name : "Rushikesh",
                    sec_name : "Gauri",
                    id : 9730

                })
            }
        )();

    
        // Arrow functoin 

        const arr_func =  (value) =>{
            return `You submitted value is ${value}`
        }
        let calling_func = arr_func("Rushi");
        console.log(calling_func);
      
        // writing the function withoue curly brases..
    
        const nameConst = (num1, num2) => num1 * num2 ;
        let calling_func1 = nameConst(10,20);
        console.log(calling_func1);
     
        // writing the function using without the brases before the arrow function..


        let num1 = parseFloat(prompt("Enter the value for the Square..."));
        const brases_func = num1 => num1 * num1;
        let calling_func2 = brases_func(num1);
        console.log(calling_func2);

       
        // function expression 

        const funName = function (){
            console.log("The hello from the Function Expression..");

        }

        

        

        let x = parseFloat(prompt("Enter Your pocket money for the calculations.."));

        let y = (prompt("Enter Your expenses one by one using comma between every value.."));


        const emplyeeId = (numberOne, numberTwo) => {
            return numberOne - numberTwo;

        }



        (function add_arr(...numbers) {
            var total = 0;
            for (let counter = 0; counter < numbers.length; counter++) {
                total += numbers[counter];
            }
            let newTotal = total;

            let first_num = emplyeeId(num1, newTotal);

            let second_arr = add_arr(num2);

            console.log(`Your Total Pocket money is ${num1} And Your Total Expenses is ${newTotal} And you left Packet money is ${first_num}`);
        }
        )();

        



        let addElement = prompt("Enter your name that will shows on the webpage..");

        let element = document.getElementById("firstId");
       
        element.innerHTML = addElement;
        element.style.color = "red";
        element.style.backgroundColor = "black";

        let elementTwo = document.body.style.background = "aqua";


        let addElement2 = prompt("Enter the string or the valye that will added to the h1 in the webpage..");
        
        let secondElement = document.getElementsByClassName(second_hone);

        secondElement.innerHTML = addElement2;

