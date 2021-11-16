import React from 'react';

function Decorator(props) {
    // decorating is wrapping code with another code
    // aim is to extend functionality
    // example

    function greeting(name){
        return "my name is " + name;
    }

    function sayHi(name){
        return "Hi, " + greeting(name);
    }

    let greeting1 = sayHi("John");

    // we can say that sayHi function is a decorator
    // of the greeting function as it "wraps" around
    // it and adds extra functionality

    //example 2
    function dataDetails(data){
        return "Data logged: " + data;
    }

    function logData(data, date){
        return dataDetails(data) + " | date logged: " + date;
    }

    let data1 = logData("8 hour work", "Tuesday 19th Nov");

    return (
        <div>
            <p>pepe</p>
            <h1>Hello</h1>
            <p>{greeting1}</p>
            <p>{data1}</p>
        </div>
    );
}

export default Decorator;