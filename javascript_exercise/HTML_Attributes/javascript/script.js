
let first = document.getElementById("first");
let a = first.getAttribute("class");
// a.getAttributes('class');
// console.log(a);

// console.log(first.hasAttribute('class'));
first.setAttribute('class' , 'gauri  Rushi');

// console.log(first.attributes);

first.removeAttribute('class');

// console.log(first.attributes);

console.log(first.dataset);
console.log(first.dataset.func_one);
console.log(first.dataset.func_two);
