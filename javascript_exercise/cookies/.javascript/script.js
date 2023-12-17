let name = prompt("Enter the name of the cookie..");
        let  value = prompt("Enter the value for thee cookies..")

        console.log(`${encodeURIComponent(name)} , ${encodeURIComponent(value)}`);
        document.cookie = "name = Cookie first is set.";
        document.cookie = "name1 = Cookie second is set..";
        console.log(document.cookie);