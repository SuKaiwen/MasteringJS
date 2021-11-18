import React from 'react';

function EventListenerJS(props) {

    // query selector
    const grandparent = document.querySelector(".grandparent");
    const parent = document.querySelector(".parent");
    const child = document.querySelector(".child");

    // Add event syntax
    // addEventListener(eventName, callback, eventType)
    if(grandparent){
        grandparent.addEventListener('click', e => {
            console.log("Grandparent");
        });
    }
    
    if(parent){
        parent.addEventListener('click', e => {
            console.log("parent");
        });
    }

    if(child){
        child.addEventListener('click', e=> {
            console.log("child");
        });
    }

    // event capturing
    // starts from top element to target
    // if we do child.addEventListener('click', e=> { ... }, {capture: true})
    // then it will show 
    // 1) document 
    // 2) grandparent
    // 3) parent
    // 4) child

    // event bubbling
    // start from target out
    // child -> parent -> grandparent -> document

    // {once: true}
    // event will run once and remove itself

    // stop propagation
    // it will stop propagation e.g.
    // child -> parent (stops at parent...)
    // e.stopPropagation()

    // removing event listeners
    // e.g. parent.removeEventListener('click', someFunc)

    return (
        <div>
            <div className = "grandparent">
                <div className = "parent">
                    <div className = "child">
                        <p>Hi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventListenerJS;