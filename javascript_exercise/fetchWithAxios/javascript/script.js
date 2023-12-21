
document.querySelector('#btn').addEventListener('click',() =>{

    const fetching = {
        method : 'get',
        url : 'https://jsonplaceholder.typicode.com/comments'

    }

    axios.request(fetching).then((responce) =>{
        const mainData = responce.data;

        const parent = document.querySelector('#mainSection');
        const table = document.createElement('table');
        table.setAttribute('border','2')
        table.setAttribute('cellpadding','10')
        table.setAttribute('cellspacing','5')


        mainData.map((d) =>{
            const tr = document.createElement('tr');
            table.appendChild(tr);
            parent.appendChild(table);

            const tableHeading1 = document.createElement('td'); //name
            const tableHeading2 = document.createElement('td'); //email
            const tableHeading3 = document.createElement('td'); //dody

            tr.appendChild(tableHeading1);
            tr.appendChild(tableHeading2);
            tr.appendChild(tableHeading3);

            tableHeading1.innerText = `${d.name}`;
            tableHeading2.innerText = `${d.eamil}`;
            tableHeading3.innerText = `${d.body}`;

        })

    }).catch((error) =>{
        parent.innerText = `Some problem is Accured..`;
        error('Some Error are accured while fatching the link..')
    })
})