import React from 'react';

function Closure(props) {

    // local variables cannot be seen from outside
    {
        let message = "Hello";
        alert(message); // displays hello
    }

    // if we do alert(message) it will display error
    // message not defined...
    
    // we can use this to isolate code that does it's own task
    {
        let message = "bye";
        alert(message); // displays bye
    }

    // note: without {} there will be error as message already declared

    // nested functions can access the outer variables...
    // e.g.

    function counter(){
        let count = 0;
        return function(){
            return count++;
        };
    }

    let myCounter = counter();
    alert(myCounter());

    // notice how the count++ is accessing the count variable
    // variables declared using var are global scoped
    // so they can be used anywhere...    

    return (
        <div>
            
        </div>
    );
}

export default Closure;