



        /*
        let leap = 366;
        let nonleap = 365;

        let con1 = parseInt(prompt("Enter the days of the year"));

        if ((con1 >= 367) || (con1 <= 364)) {
            alert("Please enter the valid number");
        }
        else if (con1 === leap) {
            alert("the given year is a leap year because it has the 366 days..");

        }
        else if (con1 === nonleap) {
            alert("The given year is a nonleap year because it has the 365 days..");

        }
        else {

        }
        */


        /* let n , fact = 1 , i = 1;
        n = prompt("Enter the number to factorial :");
        n = Number.parseInt(n);
        if(n<0){
            alert("You entered the negative number please enter the positive number");
        }
        else{
            for(i ; i<=n ; i++){
                fact*= i;
            }
            console.log(fact);
        }
        
        */


        /*
        let num1 = parseInt(prompt("Enter the number to be displayed :"));
        
        if(num1<0){
            console.log("Please enter the valid numberr");
        }
        else if((num1 >=1) && (num1 <=30) ){
            console.log("Your failed in the exam please try one more time");
        
        }
        else if((num1>30) && (num1 <= 50)){
            console.log("You got the average marks in the exam");
        
        }
        else if((num1 > 50) && (num1 <=80)){
            console.log("You got the 'b' rank in the exam");
        
        }
        else if((num1 > 80 ) && (num1 <=100)){
            console.log("you got the 'A' rank in the exam");
        
        }
        else{
            console.log("You Entered whrong parameters...");
        }
        
        */



// let age =  prompt("Enter your age :");
// if (age>10) {
//     console.log("your age is valid");

// }
// else{
//     console.log("your age is not valid");
// }






// let num1 = parseInt(prompt("Enter The your numberr"));

// if(num1%2 === 0){
//     alert("The number is Even");

// }
// else{
//     alert("The number is Odd");

// }




        
        let num1 , num2 , num3;
        num1 = parseInt(prompt("Enter the first number for gretest"));
        num2 = parseInt(prompt("Enter the second number for gretest"));
        num3 = parseInt(prompt("Enter the third number for gretest"));
        
        if(num1,num2,num3>0){
        if(num1 > num2 && num1 > num3){
            alert(num1 + " is gretest..");
        
        }
        else if(num2 > num1 && num2 > num3){
            alert(num2 + " is gretest..");
            
        }
        else if(num3 > num1 && num3 > num2){
            alert(num3 + " is gretest..");
        }
        else{
            alert("You entered whrong parameters..");
        }
        }
        else{
            alert("You entered negative number please enter the positive number..");
        }
        
  