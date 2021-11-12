import React from 'react';

function Comparisons(props) {

    // Numbers are compared by size
    // Strings are compared letter by letter in dictionary order
    // When values are compared they get converted into numbers
    // Beware of null/undefined...

    let bool1 = 5 > 4;
    let bool2 = "apple" > "pineapple";
    let bool3 = "2" > "12";
    let bool4 = undefined == null;
    let bool5 = undefined === null;

    // === means strict equality checks type as well...

    return (
        <div>
            <h1>Comparisons</h1>
            <p>Lets say we have 5 scenarios...</p>
            <p>5 > 4: {String(bool1)}</p>
            <p>"apple" > "pineapple": {String(bool2)}</p>
            <p>"2" > "12": {String(bool3)}</p>
            <p>undefined == null: {String(bool4)}</p>
            <p>undefined === null: {String(bool5)}</p>
        </div>
    );
}

export default Comparisons;