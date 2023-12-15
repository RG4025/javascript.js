


document.getElementById('clickbut').onclick = () => {
    const ele = document.getElementById('first');

    ele.innerHTML = `<h1> hii from innerhtml </h1> <br> <h2> hii from innerhtml </h2> <br> <h3> hii from innerhtml </h3> <br> <h4> hii from innerhtml </h4>`;
}

document.getElementById('clicktext').onclick = () => {
    const element = document.getElementById('second');
    element.innerText = "The innertext is added";
}
