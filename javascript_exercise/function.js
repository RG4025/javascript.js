
    //  Working with functions 


        // const matheqationadd = (x , y) => {
        //     return x + y ;
        // }

       
        // let num1 = parseInt(prompt("Enter the first number : "));

        // let num2 = parseInt(prompt("Enter the second number : "));
        // let add = matheqationadd (num1 , num2);
        // alert("The Addition of the " + num1 + " And " + num2 + " is " + add);



/*
        function add (x ,y){
            return x + y;
        }

        document.write("The addition of two numbers is : " , add(5,10) + " <br>");

        function stringname (name){
            return name;

        }

        document.write("The first name is :" , stringname("Rushi.") + " <br>");
        

        document.write("The second name is : " , stringname("Gaura."));

*/


        // The function is writtened in below is a normal function
        /*
        function fun_Math () {
            let a = 10;
            let b = 20;

            return a + b;

        }

        document.write("The addition of the two numbers is : " , fun_Math());
        */

        // The function is writtened in below is a parametarized function.

        /*
        function fun_Math( x , y ){
            return x + y;

        }

        let num1 = parseFloat(prompt("Enter the first number :"));
        let num2 = parseInt(prompt("Enter the second number :"));

        document.write("The addition of first number " + num1 + " And " + " second number " + num2 + " is : " , fun_Math(num1 , num2));

        */

        // The function writtened in below is a arrow function which is declared as a variable and its a non parameterized function..
        /*
        const fun_Math = () => {
            let a = 10;
            let b = 20;

            return (a + b)/2;

        }

        // calling function
        document.write("The Mean of the given number is :" , fun_Math());
        */


        // Thr function writtened in below is a parameterized arrow function

        const fun_Math = (x ,y) => {
            return x % y;

        }

        // callng function
        let num1 = parseInt(prompt("Enter the first number for the reminder : "));
        let num2 = parseInt(prompt("Enter the second number for the reminder : "));

        document.write("The reminder of the " + num1 + " And " + num2 + " is : " , fun_Math( num1 , num2 ));
        
   