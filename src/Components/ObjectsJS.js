import React from 'react';

function ObjectsJS(props) {

    // Objects contain multiple properties
    let user = {
        name: "john",
        age: 30
    };

    // we can access objects properties using dot operator
    let userName = user.name;
    let userAge = user.age;

    // we can add properties by literally
    // doing user.property = ...
    // here we add admin property
    // similar we can override properties using this
    user.Admin = true;

    // to delete a property we do 
    // delete user.property...
    // we can have multi word properties e.g.
    // "likes bird" = true
    let user2 = {
        "likes birds": "I love birds!"
    };

    // to access this we have to do
    let likeBird = user2["likes birds"];

    // function to create an object...
    function makeUser(name, age){
        return {
            name, 
            age,
        };
    }

    let newUser = makeUser("James", 20);

    // we can see if an object has a certain property using "in"
    // this will return true because makeUser creates that object with a name prop
    let hasName = "name" in newUser;

    // we can loop through all properties in an object using for .. in
    let userProps = [];
    for (let key in user){
        userProps.push(key);
    }

    // object referencing...
    // a variable assigned to an object stores a reference to it
    // so if we change that varaible we change the original...

    // if we want to make a complete copy
    // we can use Object.assign(...)
    // what object assign does is that it gets all the args presented and assigns it to 
    // the first arg
    // syntax is Object.assign(dest, arg1 ...)
    let obj1 = { name: "john" };
    let obj2 = { lastName: "smith" };

    // Obj1 is now name: john and lastName smith
    Object.assign(obj1, obj2);

    let lastNameObj1 = obj1.lastName;

    // WITH this we can clone using Object.assign({}, user);
    let clone = Object.assign({}, obj1);
    clone.lastName = "mary";
    
    // we can have functions in objects
    // e.g. let user = { ... sayHi() { ... }}
    // for our functions to access out variables we have to use the this keyword...
    let ourUser = {
        name: "john",
        lastName: "smith",

        fullname(){
            return this.name + this.lastName;
        }
    };

    let fullname = ourUser.fullname();

    // calculator example
    let calc = {
        sum(){
            return this.a + this.b;
        },
        sub(){
            return this.a - this.b;
        },
        read(a,b){
            this.a = a;
            this.b = b;
        }
    }

    calc.read(1,5);
    let calcSum = calc.sum();

    // Chaining: we can chain functions of an object but
    // we must return the whole object. returning the func isnt enough
    let ladder = {
        step: 0,
        up(){
            this.step++;
            return this;
        },
        down(){
            this.step--;
            return this;
        }
    }

    ladder.up().up().down().up(); // should be 2
    let steps = ladder.step;

    // NEW operator
    // the NEW keyword does the following...
    // 1) makes a new object
    // 2) sets the new object's prototype to be the constructor function's
    //    external prototype object e.g. new Member will set the prototype
    //    to be a Member (obj.__proto__ = member)
    // 3) makes "this" point to the new object
    // 4) executes the constructor function e.g. this.name = name;
    // 5) returns the new object

    // a constructor function are regular functions but they are executed with new operator
    // an example of a constructor function...
    function Member(name, id){
        this.name = name;
        this.id = id;
        this.admin = false;
    }

    // Example of what this is doing
    // 1) makes a new empty object { ... }
    // 2) sets the object proto to be constructor's external object
    //    meaning newMember.__proto__ = Member
    // 3) makes "this" point to obj e.g. this -> newMember
    // 4) executes constructor function e.g. sets the
    //    object's (as this is now point to object) name to be 
    //    "james" and id to be 123
    // 5) returns the new object (aka we can assign it to newMember) 
    let newMember = new Member("james", 123);
    let newMember2 = new Member("bob", 999);

    // optional chaining
    // sometimes the user will not have a certain property
    // or a certain property will not be initialised with a value yet
    // we can get the code to check using optional chaining ?.
    // if doesn't exist it will not cause error but return undefined

    let incompleteUser = {
        name: "john",
        lastName: "smith",
        address: {
            streetName: "willow"
        }
    }

    // for example if we want to display the details of the user...
    let details = "";
    let detailsStreetName = incompleteUser.address?.streetName;
    let streetNum = incompleteUser.address?.streetNum;

    // We can use optional chaining to do something with 
    // the error e.g.
    if (detailsStreetName === undefined){
        details += "Invalid street name | "
    } else {
        details += incompleteUser.address.streetName;
    }

    if (streetNum === undefined){
        details += "Invalid street num";
    } else {
        details += incompleteUser.address.streetNum;
    }

    return (
        <div>
            <h1>Objects</h1>
            <p>Username is {userName} age is {userAge}</p>
            <p>{user.Admin.toString()}</p>
            <p>We can have multi-word properties e.g. {likeBird}</p>
            <p>We can use functions to make objects e.g. {newUser.name}, {newUser.age}</p>
            <p>We can use in keyword to check if object has prop: {hasName.toString()}</p>
            <p>The user has: {userProps}</p>
            <p>We can assing objects props using Object.assign e.g. {obj1.lastName}</p>
            <p>checking clone last name: {clone.lastName}</p>
            <p>function in object test: {fullname}</p>
            <p>calc sum is {calcSum}</p>
            <p>Ladder step: {steps}</p>
            <p>street exercise: {details}</p>
        </div>
    );
}

export default ObjectsJS;