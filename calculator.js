var display = document.querySelector('#display');

function showDisplay(value) {
    if (value == ".") {
        display.value = "0";
    }
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let y = eval(display.value); /*O eval transforma a string em uma equação*/
    display.value = y; /* Variavel de escopo local Y para salvar um estado*/

    if (display.value == "undefined") {
        display.value = "";
    }
}