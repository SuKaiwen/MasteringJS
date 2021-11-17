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
    
    return (
        <div>
            
        </div>
    );
}

export default ProxyJS;