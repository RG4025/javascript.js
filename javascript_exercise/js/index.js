
// let a = prompt("Enter the first number : ");
// a = Number.parseInt(a);

// let b = prompt("Enter the second number :");
// a = Number.parseInt(b);

// let a = 1;
// let b = 10;

// let c = a + b;

// console.log("The addition of the given two numbers is: " , c);

/*
let str = "Rushikesh you have to practice hard otherwise your going to spend your rest of life in this hell.";
let str2 = "Rushikesh";

console.log(`The name "${str2}" ${str.includes(str2)? ' is ' : ' is not '} in the sentence`);
*/



let num1 = parseInt(prompt("Enter the first number for the Mean expression : "));

let num2 = parseInt(prompt("Enter the second number for the Mean expression : "));

let num3 = parseInt(prompt("Enter the third number for the Mean expression : "));

const Math_function = (a, b, c) =>{
        return (a + b + c) / 3;

}

if ((num1 !== " ") || (num1 !== " ") || (num1 !== " ")){
    alert("The Mean of Entered numbers is : "+ Math_function(num1, num2, num3));

}
else{
    alert("Please fill the value proplerly!..");

}



/*
let num = [1, 2, 3, 4, 5, 6];
let num1 = num.length;

for (let i = 0; i < num1; i++) {
  console.log(num[i]);
}

*/