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
        </div>
    );
}

export default DataTypes;