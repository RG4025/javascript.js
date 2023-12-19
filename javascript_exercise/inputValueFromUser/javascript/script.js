document.getElementById("btn").onclick = ()=>{
    const ele = document.getElementById('span_one');
    const userName = document.getElementById('user_input').value;

    ele.innerHTML = `<b> ${userName} </b>`;
    document.write(innerHTML);
}