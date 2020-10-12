import {CodeJar} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/codejar.min.js";
import {withLineNumbers} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/linenumbers.js";
import {Stack} from "./Assets/stack.js";

let main = function() {
    const jar = new CodeJar(
        document.querySelector(".editor"), 
        withLineNumbers(Prism.highlightElement),
    );
    
    // detects when shift and enter has been pressed 
    // and execute the code in the editor if detected
    let map = {};
    document.addEventListener('keydown', (KeyboardEvent) => {  
        map[KeyboardEvent.key] = true;
        if (map["Enter"] == true && map["Shift"] == true) {
            executeCode(jar.toString());
        }
    });

    document.addEventListener('keyup', (KeyboardEvent) => {
        map[KeyboardEvent.key] = false;        
    });
}

let executeCode = function(codeString) {
    let output = document.getElementsByClassName("console");
    // let Stack = require("./Assets/stack");
    let log = [];
    let printOut = function(expression) {
        log.push(expression);
        console.log(log);
        output[0].innerText = log.toString();
    }

    eval(codeString);
}

window.onload = function() {
    main();
}
