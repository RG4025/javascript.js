 // The immediately invoked function method takes the vlaue in the paranthesis as parameter..
 let number = (function (x) {
    return x * x;
})(20);

console.log(number);


// or

// let number = (function (x) {return x *x ;})(10);


function range(number) {
    let a = 5;
    for (let i = 0; i < number; i++) {
        console.log(a);
        // console.log(a++);

    }
}

range(3);

let  a = 0;
for (a; a < 5; a++);
console.log(a);