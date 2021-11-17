import React from 'react';

function DataTypes(props) {

    // Variables
    let message = "hello";
    message = 123456;
    let myVar = "this is my var";
    let newMessage = `this is my new message: ${myVar}`;

    // typeof
    // remember that typeof returns a string...
    // we can also do typeof(x)
    let num = typeof 123;
    let bool = typeof true;
    let str = typeof "Hello";
    let undef = typeof undefined;

    // conversions
    // we can do string conversion using String(x)
    // convert to number using Number(x)
    // for boolean conversion anything that is empty like 0, null etc is false
    // else it is true
    let numStr = String(223);
    let numStr2 = Number("123");
    let bool1 = Boolean(0); // will be false
    let bool2 = Boolean("abc"); // true

    // object to primitive conversion
    // we can specify our own toString() and valueOf() functions in our object
    // toString() will be ran when making a string conv e.g. alert(...)
    // valueOf() will be ran when making num conv

    function pop(name, pop){
        return {
            name,
            pop,
            toString: function(){
                return [name + " | " + pop + " people"];
            }
        }
    }

    let newZealand = pop("NZ", 4000000);
    let nZtoStr = newZealand.toString();

    // Spread operator
    // allows iterable to expand in places where 0+ args
    // are expected.
    // mostly used in variable array where 1+ values expected
    // can be used as a rest operator (where we store the "rest" of the args)
    function restOp(a, b, ...c){
        return c;
    }

    let resultRest = restOp(1, 2, 5, 6, 8, 9);
    // the result will be 5, 6, 8, 9 because the "rest" of the args
    // are stored in c array...

    // the spread syntax also turns an array into list of params
    let arr = [1, 2, 3];
    // x = Math.max(arr) WILL NOT WORK
    // but this will...
    let maximum = Math.max(...arr);

    // other applications
    // merge arrays
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr3 = [...arr1, ...arr2];
    // arr3 is 1, 2, 3, 4, 5, 6

    // can be used to copy arr
    // changing the new arr will not change the original
    let oldArr = [1,2,3];
    let newArr = [...oldArr];

    // array methods
    // learnt it in a previous github post
    // https://github.com/SuKaiwen/array-functions
    
    // basic rundown...
    // arr.push(...items) will add items to the end
    // arr.pop() will pop the item from the end and return
    // arr.shift() will pop an items from the beginning
    // arr.unshift(items) will add items to the beginning
    // arr.splice(x, y, ...items) will remove y elements starting at index x
    //     and insert ...items in that place
    // arr.slice(x, y) will create a new array with element from index x to y (not inc)
    // arr.concat(... items) will return NEW arr with old arr but items added to end of it
    // arr.indexOf(x) and arr.lastIndexof(x) will look for an item and return index or -1
    // arr.includes(x) return true if x is in arr or false
    // arr.filter(x => x...) will filter the array returning all values that return true in 
    //     given function
    // arr.find(x => x...) will return first val that is true
    // arr.findIndex(x => x...) will return the index
    // arr.forEach(func...) will apply func for every element
    // arr.map(x => x...) will create new array from results of func for every elem
    // arr.sort(func...) will sort array in place and return it
    // arr.reverse() reverse arr in place
    // arr.split()/join() will convert arr to string and back
    // arr.reduce(func) will calc a single value over the arr by calling func for
    //     each element...
    // Array.isArray(arr) checks if arr is an array

    // dates
    // created using new Date()
    let myDate = new Date();

    // we can also create a date using ms
    // e.g. 10 will be 10ms after jan 1 1970
    let myDate2 = new Date(10);

    // we can also pass a string
    let myDate3 = new Date("2019-01-01");

    // we can also do
    // new Date(year, month, date, hour, minute, sec, ms)
    // if we leave some param out it will be 0 by def
    let myDate4 = new Date(2011, 0, 1);

    // we can access components using 
    // getFullYear() returns xxxx date
    // getMonth() returns 0-11
    // getDate() returns 1-31
    // getHour()
    // getMin()
    // getSeconds()
    // getMilliseconds()
    // getDay() gets day of week from 0 (sunday) - 6 (sat)

    // getTime() will return the time in ms past jan 1st 1970
    // getTimezoneOffset() will return the diff between UTC and local
    // in minutes

    return (
        <div>
            <h1>Data type basics</h1>
            <p>Embed a variable using double quotes e.g. {newMessage}</p>
            <p>Type of operator... checks if some variable is a type of a primitive e.g.</p> 
            <p>Checking the types of:</p>
            <p>Num: {num}</p>
            <p>Bool: {bool}</p>
            <p>String: {str}</p>
            <p>Undef: {undef}</p>
            <p>{typeof(3901309)}</p>
            <h1>CONVERSIONS</h1>
            <p>We converted a number using String(x): typeof {typeof(numStr)}</p>
            <p>String to number: {typeof(numStr2)}</p>
            <p>Boolean example: {String(bool1)} {String(bool2)}</p>
            <p>object NZ to str: {nZtoStr}</p>
            <p>Result of rest operator: {resultRest}</p>
            <p>Maximum of ...arr is {maximum}</p>
            <p>Arr3 is {arr3}</p>
        </div>
    );
}

export default DataTypes;