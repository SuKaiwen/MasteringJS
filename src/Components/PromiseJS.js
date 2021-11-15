import React from 'react';

function PromiseJS(props) {
    // Promise basics
    // syntax: let promise = new Promise(function (resolve, reject) { ... })
    // where the resolve is called if job is done successfully
    // reject is error occured
    // the promise object returned by promise has a
    // 1) state *pending, fulfilled or rejected
    // 2) result: undef initially but error or value later
    
    // basic example of promise...
    let promise = new Promise(function(resolve, reject) {
        resolve("done");

        // if we want to throw the reject
        // reject(new Error("error"));
    });

    // there can only be ONE resolve or reject
    // after resolve or reject the function exits

    // then function
    // allows us to handle result or reject
    // syntax is
    // promise.then( function(result) { ... }, function(error) { ... });
    let resPromise = "";
    promise.then(
        result => alert("done"),
        error => alert("Error")
    );

    // we can add extra functionality in promise
    // e.g. timeout
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done after 1s"), 1000);
    });

    promise2.then(
        result => alert(result),
        error => alert(error)
    );

    // if we are only interested in successful completion
    // we can just write promise.then(...)

    // if we are only interest in errors
    // we can just write promise.catch(...)

    // there is also a finally clause
    // it runs after the promise is settled whether success or fail

    let promise3 = new Promise((resolve, reject) => {
        resolve("result");
    });
    promise3.finally(() => alert("done"))
      .then(result => alert("result done"));

    // the order of the above will be done -> result done...

    return (
        <div>
            <p>Result of promise is... {resPromise}</p>
        </div>
    );
}

export default PromiseJS;