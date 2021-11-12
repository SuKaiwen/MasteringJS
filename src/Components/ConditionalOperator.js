import React from 'react';

function ConditionalOperator(props) {

    // basics of ?
    // syntax is let result = condition ? value1: value2;
    // where value 1 means condiiton is true and value 2 is false

    let x = 10;
    let y = (x > 5) ? 10 : 0;

    // we can chain condition operator ?
    let num = 5;
    let res = (num > 100) ? "greater than 100" :
        (num > 50) ? "greater than 50" :
        (num > 20) ? "greather than 20" :
        (num > 10) ? "greater than 10" :
        "10 or less";

    return (
        <div>
            <h1>Conditional operator ?</h1>
            <p>Basics: let x = condition ? if true : if false</p>
            <p>Example if x is 10 then we have y = (x > 10) ? 10 : 5 then y will be {y}</p>
            <p>We can chain ? operators e.g. {res}</p>
        </div>
    );
}

export default ConditionalOperator;