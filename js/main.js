'use strict';

//////////////1 TASK//////////////////////////////
let list = [];
let inputNumber;

function numberAsking() {
    inputNumber = prompt('Write number');
    inputNumber = parseInt(inputNumber);
}

function numberChecking() {
    while (inputNumber !== "" || inputNumber !== null) {
        if (isNaN(inputNumber)) {
            alert("Write integer value");
            numberAsking();
        } else {
            alert("You wrote integer value. All is fine");
            return;
        }
    }
}

function primaryChecking() {
    numberAsking();
    numberChecking();

    for (let i = 1; i <= inputNumber; i++) {
        if (i % 5 === 0) {
            list.push(i);
        }
    }
    if (list.length === 0) {
        alert("Sorry, no numbers")
    } else {
        alert(list);
    }

}

primaryChecking();


///////////////2 TASK//////////////////////////////
let array = [];
let m, n;

function inputValues() {
    m = prompt("Write first number");
    m = parseFloat(m);
    n = prompt("Write second number");
    n = parseFloat(n);
}

function checkingErrors() {
    while (true) {
        if (Number.isInteger(m) && Number.isInteger(n)) {
            alert("All is fine");
            return;
        } else {
            alert("Write correct (integer) value!");
            inputValues();
        }
    }
}

function primaryAllChecking() {
    for (let i = m; i <= n; i++) {
        array[i] = i + 1;
    }
    //alert(array);
    let primeNumbers = [];
    let primeNumber = 2;
    primeNumbers.push(primeNumber);
    while (primeNumber < array.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % primeNumber === 0) {
                delete array[i];
            }
        }
        let j = 1;
        while ((typeof array[j] === "undefined") && j < array.length) j++;
        primeNumber = array[j];
        primeNumbers.push(primeNumber);
    }
    alert("PrimaryNumbers: " + primeNumbers);
}
// inputValues();
// checkingErrors();
// primaryAllChecking();