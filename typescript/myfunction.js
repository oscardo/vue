"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
//functions 
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("algo");
function signUpUser(name, email, isPaid) {
    return true;
}
signUpUser('Oscar', 'oscardo@gmail.com', true);
var loginUser = function (name, email, isPaid) {
    return false;
};
loginUser("Oscar", "oscardo@gmail.com", false);
var loginUser2 = function (name, email, isPaid) {
    var Login = false;
    if (isPaid) {
        Login: false;
    }
    else {
        Login: true;
    }
    return Login;
};
var final = loginUser2('Oscardo', 'osc@gmail.com', true);
var heros = ['SuperMan', 'Batman', 'Spiderman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errormsg) {
    console.error('Error: ' + errormsg.toUpperCase());
}
consoleError("Error de entrada");
function hadlerError(errormsg) {
    throw new Error(errormsg);
}
hadlerError("Error de entrada de datos");
