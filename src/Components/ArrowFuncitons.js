import React from 'react';

function ArrowFuncitons(props) {

    // functions have local var only visible inside that function
    // but it can also access outer var

    // basic funciton
    let name = "bob";

    function changeName(){
        name = "john";
    }


    return (
        <div>
            <h1>Functions and arrow func</h1>
        </div>
    );
}

export default ArrowFuncitons;