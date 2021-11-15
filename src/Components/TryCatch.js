import React from 'react';

function TryCatch(props) {
    // try catch basics

    // syntax is try { ... }catch(err){ ... }
    // or just try { ... } catch { ... }
    let user = {
        name: "john",
        lastName: null
    };

    try{
        let lName = user.lastName;
        if(lName === null){
            throw new Error("Invalid Last Name");
        }
    }catch(err){
        alert(err.message);
        // Do something here...
    }finally{
        alert("Error solved!");
    }

    // how this code works...
    // we have a user object with an invalid last name
    // we "try" a piece of code
    // we see that the last name is invalid so we throw an error
    // in the catch statement we get the error and read the message
    // the finally block will always execute

    // we can have catch block go without the throw
    let badJson = "{ bad json }";
    try{
        let user = JSON.parse(badJson);
        // note: code will NOT execute
        // it will jump straight to the catch statement
    }catch(err){
        alert("This code doesnt work!");
        alert(err.message);
    }

    // this will show "this code doesnt work"...
    // invalid json ...

    return (
        <div>
            
        </div>
    );
}

export default TryCatch;