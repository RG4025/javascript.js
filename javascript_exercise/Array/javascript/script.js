
        // In the array we can add diffrent types of the data types

        let fruit = ['banana', 'kiwi', 'apple', 'pinaple'];
        console.log(fruit);

        console.log(fruit[1]);

        // .lenght is shows the number of values are stored in the array
        console.log(fruit.length);

        let num = ['1', '2', '3', '4', '5'];

        // The method toString is used to convert the array into string
        let a = num.toString();
        console.log(a);

        // The join method is create or adds the passed string in the double quote in between the array element 
        let b = num.join("-");
        console.log(b);

        // pop returns the popped element
        let c = num.pop();
        console.log(c);
        console.log(num);

        // push returns the new array length at the end
        let d = num.push(110);
        console.log(d);
        console.log(num);

        // Removes the first element from the array 
        let e = num.shift();
        console.log(e);
        console.log(num);


        // Add the new element to the array at the start 
        let f = num.unshift(20);
        console.log(f);
        console.log(num);

        // it simply reverse the array 
        let g = num.reverse();
        console.log(g);

        // it removes the element from the array and shows the empty item is there.  
        delete num[0];
        console.log(num);


        // if more then items are deleted then it will shows the empty*2  that means there are mo re than two array items where deleted
        let delete_arr  = delete num[1];
        console.log(a);

        // The sort method sorts the array alphabatecally 
        let str_arr = ['rushi', 'kesh', 'gurav'];
        str_arr.sort();
        console.log(str_arr);


        let num2 = ['23', '3434', '43243', '47674', '90'];

       

        // printing in alfabatecally 
        num2.sort();
        console.log(num2);

        const compair = (a, b) => {
            return a + b;
        }

        // printing in assending order 
        num2.sort(compair);
        console.log(num2);

        // printing in decending order 
        const compair2 = (a, b) => {
            return b - a;
        }
        num2.sort(compair2);
        console.log(num2);

        // The first number is used to position from the value is going to replace and second number is used to replace how many number with this position number and the last two values are going to replace with the given position number
        let number = ['1', '23', '32', '56', '3'];
        number.splice(1, 2, 3, 4);
        console.log(number);

        // It will show the array from the given slice index number  
        let newnum = number.slice(1);
        console.log(newnum);

        // prints the array from index given one pposition to index given second position in the slice method  
        newnum = num.slice(1, 3);
        console.log(newnum);

        // The Array.form is used to convert the string and html elements into an array.  
        let name = "Rushi";
        let arr = Array.from(name);
        console.log(arr);

        for (let item of arr) {
            console.log(item);

        }

        for (let i in arr) {
            console.log(arr[i]);

            // console.log(i); // for length of the array 
        }



        // array map 

        const A = [1, 2, 3, 4];
        let B = A.map((value, index, array) => {
            console.log(value, index, array);
            return value + 1;

        })
        console.log(B);

        // array filter 

        // creat a function that containes some condition that directly affect iin the array elemnts and gives the conditional output
        let array_one = [10, 8, 90, 89, 76];
        let filter_arr = array_one.filter((a) => {
            return a < 40;
        })

        console.log(filter_arr);

        // like filtre method the reduce method runs the condition and  givess the output in the addition mr substraction of the in between two elements like 1+2+3+4+5=15;
        let red_arr = [1, 2, 3, 4, 5];
        let red_arr2 = red_arr.reduce((a, b) =>{
            return a+b;

        })
        console.log(red_arr2);




        let name_one = "rushi";
        let name_two = "gurav";
        let name_three = "Empty";
        const add_arr = Array.form((name_one,name_two,name_three));
        console.log(add_arr);

        // the quick brown fox jumps over the Lazy dog.
        // the quick brown fox jumps over the lazy dog
        // the quick brown fox jumps over the laxy dog.
        // the quick brown fox jumps over the lazy dog.
        // the quick brown fox jumps over the lazy dog.
        // the quick brown fox jumps over the lazy dog.
        // the quick brown fox jumps over the lazy dog.
        // the quick brown fox jumps over the lazy dog.
