import React from 'react';

function Operations(props) {

    // unary operation is a single operand
    // example will be -x 
    let x = 1;
    x = -x;

    // binary operation is two operands e.g. 3 - 2
    let a = 1;
    let b = 2;
    let c = a + b;

    // basic math operands
    // + add, - sub, * multiply, / divide, % remainder, ** power of

    // remainder: divides a by b until it can't and gets the remainder
    let z = 99;
    let y = 5;
    let s = z%y; //should be 4

    // we can perform string concats with +
    let string1 = "hello";
    let string2 = "world";
    let combined = string1 + string2;

    // conversion if one side is a number
    let side1 = "6";
    let side2 = 3;
    let total = side1 / side2;

    // We can do numeric conversion using unary +
    // it is the same as number
    let strNum = "12131241";
    let strNum2 = +strNum;

    // We can modify in place using += or *= etc...
    // We can increment/decrement using ++ or --

    return (
        <div>
            <h1>Operations and comparisons</h1>
            <p>Remainder: if we have z = 99, y = 5 then z % y will be: {s}</p>
            <p>String combination: if we have hello + world the result will be {combined}</p>
            <p>Note that any math operand will convert both sides to numbers if one side is one</p>
            <p>e.g. {typeof(total)}</p>
            <p>We can do num conversion using unary + e.g. {typeof(strNum2)}</p>
        </div>
    );
}

export default Operations;