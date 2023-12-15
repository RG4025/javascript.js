
        var num_one;
        var num_two;
        num_one = prompt("Enter the first number :");
        num_two = prompt("Enter the second number :");

        num_one = Number.parseInt(num_one);
        num_two = Number.parseInt(num_two);


        // else{
        //     alert("Please Enter the valid Details!..");
        // }
        let con1 = prompt("Which mathmatical expression you wont to execute please select the below options" + "1 - (+) , 2 - (-) , 3 - (*) , 4 - (/) , 5 - (%)");

        con1 = Number.parseInt(con1);


        if ((num_one == " ")) {
            alert("the first OR second number should not be empty!..");
        }
        else if ((num_two == " ")) {
            alert("the first OR second number should not be empty!..");
        }
        else {
            if ((con1 != "")) {
                if (con1 === 1) {
                    alert(" The addition of the " + num_one + " + " + num_two + " is : " + (num_one + num_two));
                }
                else if (con1 === 2) {
                    alert(" The Substraction of the " + num_one + " - " + num_two + " is : " + (num_one - num_two));
                }
                else if (con1 === 3) {
                    alert(" The Multiplication of the " + num_one + " * " + num_two + " is : " + (num_one * num_two));
                }
                else if (con1 === 4) {
                    alert(" The Division of the " + num_one + " / " + num_two + " is : " + (num_one / num_two));
                }
                else if (con1 === 5) {
                    alert(" The Reminder of the " + num_one + " % " + num_two + " is : " + (num_one % num_two));
                }
                else {
                    alert("Please Enter the valid numbers!... You entered the whrong parameters..");
                }
            }
            else {
                alert("Please Enter The Right Parameters!..");

            }
        }
// if((num_two = "")){
//     alert("the second number should not be empty!..");

// }

// else{
//     alert("Please Enter the valid Details!..");
// }

