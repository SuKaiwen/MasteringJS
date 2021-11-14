import React from 'react';

function ClassInheritance(props) {
    // BASICS OF CLASS INHERITANCE AND PROTOTYPE

    // basics syntax of a class
    class Animal {
        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            alert("speed");
        }

        stop(){
            this.speed = 0;
            alert("stopped");
        }
    }

    // we can use the extend keyword to create a subclass
    // that inherits the parent's properties and methods

    class Rabbit extends Animal {
        hide(){
            alert("hidden");
        }
    }

    // now the rabbit class has the methods:
    // run, stop and hide
    
    let rabbit1 = new Rabbit("John");
    rabbit1.stop();

    // note that if the rabbit class has a method
    // of the same name as the parent, it will override it
    // e.g.
    class FastRabbit extends Animal {
        run(speed){
            this.speed = speed;
            alert("very fast speed");
        }
    }

    let fastRabbit1 = new FastRabbit("John");
    fastRabbit1.run(10);

    // if we run FastRabbit.run(10); it will show very fast speed
    // if we want our own function to call the parent
    // function then do something we can use super.funcName()

    class DigRabbit extends Animal {
        stop(){
            super.stop();
            alert("start to dig");
        }
    }

    // when we call DigRabbit.stop() we will get "stopped"
    // then "start to dig"

    let digRabbit1 = new DigRabbit("John");
    digRabbit1.stop();
    
    // we can add our own features to the rabbit
    class BigRabbit extends Animal {
        constructor(name, size){
            super(name);
            this.size = size;
        }
    }

    let bigRabbit1 = new BigRabbit("John", 100);
    alert(bigRabbit1.size);

    // this bigrabbit will have the properties of animal
    // name and speed but it will also have the new prop size

    // PROTOTYPE
    // we can set the prototype of an object using .__proto__ = ...
    let fish = {
        eats: true,
        swim(){
            alert("swimming");
        }
    };

    let salmon = {
        jumps: true
    };

    salmon.__proto__ = fish;
    // now if we do salmon.eats we get true and salmon.jump we get true...
    // we can also do salmon.swim() to display "swimming"

    // we can prototype chain
    // we can shorthand __proto__ = just placing it as prop

    let redSalmon = {
        isBig: true,
        __proto__: salmon
    }

    // now we can do redSalmon.jump, swim, eats and isBig
    
    // similar to class if we have the same named method in our
    // prototype as our parent we will call that over parent
    let smallFish = {
        isBig: false,
        __proto__: fish,
        swim(){
            alert("swims slowly");
        }
    }
    
    // result of this will be swims slowly
    smallFish.swim();
    
    // note that if we change properties of the prototype
    // the properties of the parent will not be changed
    // if we call obj.method() and the method is taken from the prototype
    // then the "this" still references the object
    return (
        <div>
            
        </div>
    );
}

export default ClassInheritance;