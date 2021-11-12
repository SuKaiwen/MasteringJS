import React, {useState} from 'react';

function InteractionsJS(props) {
    const [ourPrompt, setOurPrompt] = useState("first prompt");
    const [isConfirmed, setIsConfirmed] = useState(false);
    // This just mainly involves alert etc...
    function onAlert(){
        alert("here");
    }

    // Asks user a question and does something with the answer
    // first arg is the question
    // second arg is the template answer (placeholder)
    function onPrompt(){
        let result = prompt("this is the title", "prompt message");
        setOurPrompt(result);
    }

    // Similar to prompt 
    // but it is a boolean
    // returns true if OK is pressed else false
    function onConfirm(){
        let confirmRes = window.confirm("Do you want to confirm this?");
        setIsConfirmed(confirmRes);
    }

    return (
        <div>
            <button onClick={onAlert}>Alert</button>
            <button onClick={onPrompt}>Prompt</button>
            <button onClick={onConfirm}>Confirm</button>
            <p>The current prompt message is: {ourPrompt}</p>
            <p>Is it confirmed? {String(isConfirmed)}</p>
        </div>
    );
}

export default InteractionsJS;