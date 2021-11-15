import React from 'react';

function NFE(props) {
    // we can assign a function to a name
    let add = function(n1, n2){
        return n1 + n2;
    }

    // now we can call add to invoke
    // the function n1 + n2...
    
    let sum = add;

    // now this function is assigned to add now
    // we can do sum(x, y)
    let result = sum(5 ,6);

    // Named function expressions have a name
    // example of a regular function will be
    let sayHi = function(name){
        return `Hello ${name}`;
    };

    // NFE will look like
    let sayHiNFE = function func(name){
        return `Hello ${name}`;
    };

    // what is the purpose of the extra func? 
    // the function can still be run using sayHiNFE()
    // two things:
    // 1) allows the function to reference itself internally...
    // 2) is it not visible outside of the function
    // example...
    let sayHi2 = function func(who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            func("Guest"); // use func to re-call itself
        }
    };
      
    sayHi2();

    // NOTE: that if we recall with sayHi2 instead of func
    // in most cases we can but in some cases like
    // if we delete sayHi2 later (make = null) then we get error

    // if we delete sayHi2 later and we use func(...) we still 
    // make it work

    return (
        <div>
        </div>
    );
}

export default NFE;