"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 0;
score: 34; //numérico
score: "23"; //string
var usuario = { name: "oscardo", id: 123 };
usuario = { name: 'Alexa', id: 2334 };
usuario = { username: 'Diana', id: 24 };
function getDBId(id) {
    //making some API call
    console.log("DB is ".concat(id));
}
getDBId(3);
getDBId("3");
function getDBId_2(id) {
    //making some API call
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
    else if (typeof id === "number") {
        id.toPrecision();
    }
}
getDBId_2(3);
getDBId_2("3");
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3", 4, 5, 6, false, true, "7"];
var data4 = ["1", "2", "3", 4, 5, 6, false, true, "7"];
var variable;
variable = "Windows";
variable = "Mac";
variable = "Linux";
