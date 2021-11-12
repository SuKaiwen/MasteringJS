import React from 'react';

function ArrowFuncitons(props) {

    // functions have local var only visible inside that function
    // but it can also access outer var

    // basic funciton
    // by the end the name var will hold john
    let name = "bob";

    function changeName(){
        name = "john";
    }
    changeName();

    // if we declare a local var it will use that one instead of the outer one
    let name2 = "bobs";
    
    function changeName2(){
        let name2 = "johns";
        //alert(name2); will show johns
    }

    // we can pass params into a function e.g.
    function sum(a, b){
        return a + b;
    }
    let res = sum(1,2);

    // if no param it becomes undefined e.g.
    function checkUndef(message){
        if (message === undefined){
            return "no message";
        }
        return "my message";
    }
    let noMessage = checkUndef();

    // Note: if a function has empty return or no items, it returns undefined...
    // Naming convention: should be brief and as accurate as possible
    // good names are something like showMessage(), getAge()...
    // Each function should only have ONE action

    // if a function's action is too complex, we can split into two
    // e.g. if we want to show all primes of a number
    // we can have a showPrimes(x) and then a isPrime(x) function

    // if we copy a function it will works
    let hello = "hello";
    function sayHi(){
        hello = "hi";
    }

    let func = sayHi;
    func();

    // by this point hello should have the value hi

    // callback function is a function passed into a function designed
    // to be called back inside that function
    let callbackRes = "";

    function ask(bool, hi, bye){
        if (bool){
            hi();
        }else{
            bye();
        }
    }

    function hi(){
        callbackRes = "hi";
    }

    function bye(){
        callbackRes = "bye";
    }
    
    ask(true, hi, bye);

    // Arrow function
    // syntax is let func = (args) => expression
    // for example a basic sum function...
    let sum2 = (a,b) => { return a + b;}
    let sumRes = sum2(10,15);

    // if no args just use ()
    let sayHi2 = () => {return "hi";}
    let noArg = sayHi2();

    return (
        <div>
            <h1>Functions and arrow func</h1>
            <p>Basic func result is {name}</p>
            <p>Default value for empty param is undefined, can be used to error check</p>
            <p>e.g. the result of checkUndef with no paramater is {noMessage}</p>
            <p>Copy function example: {hello}</p>
            <p>Callback function result: {callbackRes}</p>
            <p>Arrow func result: {sumRes}</p>
            <p>No arg arrow func: {noArg}</p>
        </div>
    );
}

export default ArrowFuncitons;