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
        </div>
    );
}

export default ObjectsJS;