import React from 'react';

function LoopsSwitch(props) {
    
    // basics: while (x) { ... }
    // for(x = ...; x < ... ; x++) { ... }
    // do { ... } while (x)

    // other loop stuff: break = break existing loop
    // continue = skip existing iteration and go to next
    
    // If we want to break out of an outer loop
    // we can give a loop a "label"
    // break outer = break outer loop e.g.

    let arr = []

    // arr will be 001 because
    // 1) we push i = 0 into array
    // 2) we push j = 0 into array
    // 3) we push j = 1 into array
    // then we break out of the WHOLE outer loop
    // so we don't get i = 1, i = 2 like normal break...
    outer: for (let i = 0; i < 3; i++){
        arr.push(i);
        for (let j = 0; j < 3; j++){
            arr.push(j);
            if(j == 1){
                break outer;
            }
        }
    }

    // swtich statement = multiple if statement
    // syntax is ...
    // Note that the break after every case is IMPORTANT
    // else it will run all the cases...
    // default just means if it doesn't match any case it will execute default...
    let x = "hello";
    let switchRes = "";

    switch(x){
        case "lol":
            switchRes = "lol";
            break;
        case "hello":
            switchRes = "hellos";
            break;
        default:
            switchRes = "def";
    }

    // for switches we can group case statements
    // for when we want two cases to run the same code
    let x2 = "hello";
    let switchRes2 = "";
    switch(x2){
        case "lol":
            switchRes2 = "lol";
            break;
        case "hello":
        case "hi":
            switchRes2 = "hellos";
            break;
        default:
            switchRes2 = "def";
    }

    // Note: type matters case 0 is different to case '0'

    return (
        <div>
            <h1>Loops/Switch</h1>
            <p>arr is {arr}</p> 
            <p>switch example: the result will be {switchRes}</p>
            <p>switch example2: the result will be {switchRes2}</p>
        </div>
    );
}

export default LoopsSwitch;