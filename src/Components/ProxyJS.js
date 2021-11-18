import React from 'react';

function ProxyJS(props) {

    // Proxy allows us to override default behaviour
    
    var handler = {
        get: function(target, name){
            // custom code...
            if (name in target){
                return target[name];
            } else {
                return "ERROR!";
            }
        }
    }

    var proxy = new Proxy({}, handler);
    
    proxy.a = 1;
    proxy.b = undefined;

    // Will give us 1 and undefined
    console.log(proxy.a, proxy.b);

    // Will give us "ERROR" when we call p.c
    console.log(proxy.c);

    // WITHOUT the proxy p.c will be undefined...

    // MORE realistic example of proxy

    let validator = {
        set: function(obj, prop, value){
            if (prop === "age"){
                if(typeof value !== 'number' || Number.isNaN(value)){
                    console.log("Age must be number");
                }
                if(value < 0){
                    console.log("Age must be valid");
                }
            }

            obj[prop] = value;
            return true;
        }
    }

    let person = new Proxy({}, validator);

    // will return "Age must be number"
    person.age = 'young';

    // will return "Age must be valid"
    person.age = -100;

    // will return 30
    person.age = 30;

    // NOTE that it WILL still assign the value
    // if we do person.age = 'young'
    // the validator will assign x to the value

    // REFLECT object
    // reflect object allows us to target some object
    // and determine its functionality/prop
    // allows us to intercept those and 
    // call these functions/prop in separate ways
    // USED WITH PROXY

    // Lets say we have a basic object
    let worker = {
        name: "John",
        id: 123,
        work: function(workName){
            console.log("My work is: " + workName);
        },
    };

    // Common methods
    // Reflect.ownKeys(obj);
    // Allows us to give us back ALL of the props
    
    // In this case it will return:
    // ["name", "id", "work"]
    // it just returns the NAME of the props...
    console.log(Reflect.ownKeys(worker));

    // Reflect.get(obj, nameOfProp)
    // will get the value of obj.nameOfProp
    // will return "John"
    console.log(Reflect.get(worker, "name"));

    // Reflect.set(obj, nameOfProp, value);
    // will change that prop to that value
    // now the value of id is 234
    // will return true if done
    console.log(Reflect.set(worker, "id", 234));

    // Reflect.has(target, prop)
    // checks if some object has some prop
    // true => worker has prop name id
    console.log(Reflect.has(worker, "id"));

    // Reflect.apply(method, thisArgs, argList);
    // Will console log "My work is: Hard"
    // syntax is: method you want to use
    // the object
    // the arg list (note it has to be array)
    Reflect.apply(worker.work, worker, ["hard"]);

    return (
        <div>
            
        </div>
    );
}

export default ProxyJS;