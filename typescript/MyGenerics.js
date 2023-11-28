"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scores = [];
var names = [];
function IdentifyOne(val) {
    return val;
}
function IdentifyTwo(val) {
    return val;
}
function IdentifyThree(val) {
    return val;
}
IdentifyThree("3");
IdentifyThree(3);
IdentifyThree('3');
IdentifyThree(true);
IdentifyThree(false);
function IdentifyFour(val) {
    return val; //iqual that IdentifyThree
}
IdentifyFour({ brand: "Brisa", type: 1 });
function getSearchProducts(products) {
    //return 3 //error es number
    return products[3];
}
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunc(valorOne, valorTwo) {
    return {
        valorOne: valorOne,
        valorTwo: valorTwo
    };
}
anotherFunc(2, "trampa");
function conexion(valorOne, valorTwo) {
    return {
        valorOne: valorOne,
        valorTwo: valorTwo
    };
}
conexion(1, {
    connection: "conectDB",
    password: "12345678",
    username: "Oscardo"
});
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
