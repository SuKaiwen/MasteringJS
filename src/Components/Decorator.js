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
    // we can do this with func.call()
    // so now our log data works with 
    // all sort of work that needs to be logged
    // instead of JUSt the data details function
    function dataDetails(data){
        return "Data logged: " + data;
    }

    function logData(func, data, date){
        let result = func.call(...arguments) + " | date logged: " + date;
        return result;
    }

    let data1 = logData(dataDetails, "8 hour work", "Tuesday 19th Nov");

    // e.g. we can have another function
    function dataDetails2(data){
        return "Area worked: " + data;
    }

    // here we pass in the dataDetails2 function
    let data2 = logData(dataDetails2, "Warehouse", "Monday");
    
    // example 3
    // we can also use func.call(context, args)
    function checkin(date){
        return "Checked in at: " + date;
    }

    function flightFunc(func, flightNum, date){
        let result = flightNum + " | " + func.apply(this, arguments);
    }

    let data3 = flightFunc(checkin, "12345", "Monday");

    return (
        <div>
            <p>pepe</p>
            <h1>Hello</h1>
            <p>{greeting1}</p>
            <p>{data1}</p>
            <p>{data2}</p>
            <p>{data3}</p>
            <p>pepe</p>
        </div>
    );
}

export default Decorator;