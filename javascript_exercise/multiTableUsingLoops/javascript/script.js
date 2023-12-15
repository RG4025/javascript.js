let num = parseFloat(prompt("Enter the value for the Multiplication table.."));

let num2 = parseInt(prompt("Enter the  stop value for Multiplication table.."));

let i = 1;
while( i <= num2){
    console.table(`${num} * ${i} = ` + num*i);
    i++;
}


// do{
//     console.log(`${num} * ${i} = ` + num*i);
//     i++;
// }while(i <= num2);

// for(let i =1; i<=num2; i++){

//     console.log(`${num} * ${i} = ` + num*i);

// }

//         const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// let fact = parseInt(prompt("Enter the number for factorial.."));
// console.log(factorial(fact)); 


// const name = new String('Rushikesh');

// const newname = name.slice(1, 4);
// console.log(newname);