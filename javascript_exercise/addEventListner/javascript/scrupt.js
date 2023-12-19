 // const color = document.que   rySelectorAll('select').value ;
        
 document.querySelector('select').addEventListener('change', () =>{
    const color = document.querySelector('#change_color');
   document.getElementsByClassName('firstclass')[0].style.backgroundColor = color.value;
   console.log(color.value);
})

document.querySelector('button').addEventListener('click', () => {
   document.getElementsByClassName('firstclass2')[0].style.backgroundColor = "black";
})