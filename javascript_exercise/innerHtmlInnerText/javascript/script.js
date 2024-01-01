document.getElementById('btn').addEventListener('click',function(){

    let add = document.querySelector('#first_div > p');
    add.innerHTML = `<b> This is the innerhtml with the bold tag..</b>`;
    console.log(add.innerText);
});

document.getElementById('btn2').addEventListener('click',function(){
    let add = document.querySelector('#first_div > span');
    add.innerText = "This is the text added with innertext";
})
