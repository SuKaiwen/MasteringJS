import React from 'react';

function Recursion(props) {

    // recursion is the repeated application of a recursive function
    // basic syntax is
    // function f() { if (cond) { stop calling itself } else { call
    // itself again with new variable }}

    // basic example: countdown
    function countDown(n){
        alert(n);
        if(n > 1){
            countDown(n-1);
        }
    }

    countDown(3);
    // it is important that we implement the stopping function
    // or base

    // example 2:
    // factorial 
    function factorial(n){
        if(n==1){
            return n;
        }
        return n * factorial(n-1);
    }

    alert(factorial(5));
    
    return (
        <div>
            
        </div>
    );
}

export default Recursion;