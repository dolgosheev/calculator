let calculator = document.getElementById("calc");

// result field
let result = document.createElement("div");
result.innerHTML = "";
result.className = "result";
result.id = "result";
calculator.appendChild(result);

// numbers field
for (let i = 0; i < 10; i++) {
    let number = document.createElement("div");
    number.innerHTML = i.toString();
    number.className = "number";
    number.onclick = function (){
        document.getElementById("result").innerHTML += i;
    };
    calculator.appendChild(number);
}

calculator.appendChild(document.createElement("br"));

let main_operations = {
    "+": operation,
    "-": operation,
    "/": operation,
    "*": operation,
    "=": summary,
    "clear": clear,
    "delete last": delete_last
};

for (const key in main_operations) {
    let button = document.createElement("div");
    button.innerHTML = key;
    button.className = "operation";
    button.onclick = function (){
        main_operations[key](key);
    };
    calculator.appendChild(button);
}

function clear() : void {
    document.getElementById("result").innerHTML = "";
}

function delete_last() : void {
    let string = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = string.substring(0,string.length - ( string.charAt(string.length-1) === " " ? 2 : 1 ));
}

function summary() : void {
    try {
        let result = eval(document.getElementById("result").innerHTML);
        if(result === undefined)
            throw new Error('Parameter is not valid!');
        document.getElementById("result").innerHTML = result;
    }
    catch (e){
        document.getElementById("result").innerHTML = "Error";
        setTimeout(function (){
            document.getElementById("result").innerHTML = "";
        },1000);

    }
}

function operation(a:string) : void {
    document.getElementById("result").innerHTML += ` ${a} `;
}