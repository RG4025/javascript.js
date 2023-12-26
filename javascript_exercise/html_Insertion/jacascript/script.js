let a = document.getElementsByTagName('div')[0];
        a.innerHTML = a.innerHTML + '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam debitis vero excepturi ratione, ex esse quasi iste sapiente neque voluptates blanditiis doloribus ducimus sequi a id laborum distinctio eos?</p>';

        let div = document.createElement('div');
        div.innerHTML = div.innerHTML + '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam debitis vero excepturi ratione, ex esse quasi gauri sapiente neque voluptates blanditiis doloribus ducimus sequi a id laborum distinctio eos?</p>';

        // a.appendChild(div);
        // a.prepend(div);
        a.before(div);

        // a.replaceWith(div);