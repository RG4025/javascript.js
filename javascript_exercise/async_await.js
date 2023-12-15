
        async function harry() {

            let number_one = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('hii there.. i am first');
                }, 2000);
            })

            let number_two = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('I am the second');
                }, 5000)
            })

            console.log("Stoaring the first value please wait..");
            let fun_one = await number_one;

            console.log("The first value is stored please wait for the second one..")

            console.log("Stoaring the second value please wait..");
            let fun_two = await number_two;

            console.log("The first and second value is  stored..");

            return [fun_one, fun_two];

        }

        let a = harry();
        a.then((value) => {
            console.log(value);
        }, (error) => {
            console.log(error);
        })

