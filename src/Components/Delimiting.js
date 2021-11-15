import React from 'react';

function Delimiting(props) {
    // public: anything can get access to this from outside value
    // protected: properties/methods can't be access from outside
    // protected is denoted with _
    class Machine {
        _power = 0;
        constructor(power){
            this._power = power;
        }

        getPower(){
            return this._power;
        }

        setPower(power){
            this._power = power;
        }
    }

    let newMachine = new Machine(100);
    let x = newMachine.getPower();

    // Note witout get power(), calling newMachine.power
    // will result in nothing because _power is protected method
    // so it will not allow access to it directly

    // private
    // e.g. maxPower
    // denoted with #
    class Car {
        #power = 100;

        get power(){
            return this.#power;
        }

        set power(power){
            this.#power = power;
        }
    }

    let newCar = new Car();

    // noW IF WE DO something like alert(newCar.#power);
    // we get an error 
    // private fields are enforced by language
    // if we inherit from Car we still have no direct access to power
    // e.g. 
    class SuperCar extends Car {
        getCarPower(){
            // if we do alert(this.#power); in here
            // we get error can only access from Car
            // without the getter, this will not work...
            // note: this.#power will not work due to private 
            // variable...
            alert(this.power);
        }
    }

    let newCar2 = new SuperCar();
    newCar2.getCarPower();
    // if we want to access the power variable from supercar
    // we must use getter/setter...
    
    // STATIC
    // static methods are called directly on the class
    // without the need of an instance/object e.g. no new mycar...
    // static stuff are used to implement things that belong to the class
    // but not to a particular object of that class
    // example if we want to sort rabbits by speed...

    class Animal {
        constructor(name, speed){
            this.name = name;
            this.speed = speed;
        }

        static compare(a, b){
            return a.speed - b.speed;
        }
    }

    class Rabbit extends Animal {

    }

    let rabbits = [
        new Rabbit("White rab", 30),
        new Rabbit("Black rab", 20),
        new Rabbit("Brown rab", 15)
    ];

    rabbits.sort(Rabbit.compare);

    let firstRab = rabbits[0].speed;

    return (
        <div>
            <p>{x}</p>
            <p>pepe</p>
            <p>{firstRab}</p>
        </div>
    );
}

export default Delimiting;