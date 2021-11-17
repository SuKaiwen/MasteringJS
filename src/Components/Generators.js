import React from 'react';

function Generators(props) {

    // generators
    // denoted by the * after function
    // yield is special return keyword
    // purpose of generator is to run some code
    // return a value, run some more code
    // return more value then so on...

    function* simpleGen(){
        yield 1
        yield 2
        yield 3
    }

    const generatorObj = simpleGen();

    // .next() function
    const value = generatorObj.next();
    const value2 = generatorObj.next();
    const value3 = generatorObj.next();
    const value4 = generatorObj.next();
    // will be {value: 1, done: false}
    console.log(value);

    // will be {value: 2, done: false}
    console.log(value2);

    // will be {value: 3, done: false}
    console.log(value3);

    // will be {value: undefined, done: true}
    console.log(value4);

    // note that generators using .next()
    // will run the code in between yields...
    function* simpleGen2(){
        yield 1
        console.log("Hello")
        yield 2
        console.log("Hey John")
        yield 3
        console.log("1 + 2 = 3")
        yield 4
    }

    const generatorObj2 = simpleGen2();

    // These sets of calls will print out
    // Hello => Hey John => 1 + 2 = 3
    // as it is running the code between yields
    const val1 = generatorObj2.next();
    const val2 = generatorObj2.next();
    const val3 = generatorObj2.next();
    const val4 = generatorObj2.next();

    // real life uses of generator
    // useful when we need infinite loops without JS crashing
    // function* makeId(){
    //     let id = 1
    //     while(true){
    //         yield id
    //         id++
    //     }
    // }

    // another use case is iterators
    // e.g. while (obj.next().done !== false) { do something... }

    // more functionality
    // whatever you pass into next(...) gets returned to yield
    // function generateId(){
    //     let id = 1
    //     while(true){
    //         const inc = yield id;
    //         if (inc != null){
    //             id += inc
    //         } else {
    //             id++
    //         }
    //     }
    // }
    
    // const idGenerator = generateId();

    // console.log(idGenerator.next());
    // console.log(idGenerator.next(10));
    // console.log(idGenerator.next(3));

    // we can throw errors using generatorObj.throw(new Error(...));
    
    return (
        <div>
            <p>generator</p>
        </div>
    );
}

export default Generators;