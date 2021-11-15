import React from 'react';

function Currying(props) {
    // currying is transforming a function with multiple
    // args into different functions with a single arg
    // e.g. function f(a,b) becomes function(a)(b)

    // simple example: multiply
    function multiply(a, b){
        return a * b;
    }

    function curryMultiply(a){
        return (b) => {
            return a * b;
        }
    }

    // these two will produce the same result
    let res = curryMultiply(2)(3);
    let res2 = multiply(2, 3);

    // if we just do curryMultiply(2)
    // res 3 will be a function...
    let res3 = curryMultiply(2);

    return (
        <div>
            <p>Curried x = {res}</p>
            <p>Normal x = {res2}</p>
            <p>Curry 1 arg = {res3}</p>
        </div>
    );
}

export default Currying;