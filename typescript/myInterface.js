"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = { id: 12, email: "Oscar@gmail.com", userId: 1234 };
Usuario = { id: 12, email: "Oscar@gmail.com", userId: 1234, googleId: "23232323d" };
Usuario.googleId = "dd4455445";
Usuario.email = "Osc@ar.com";
Usuario.userId = 2334;
Usuario = {
    id: 32,
    email: "car@gmail.com",
    userId: 14,
    startTrail: function () {
        return "Trail Started";
    }
};
Usuario = {
    id: 67,
    email: "car@gmail.com",
    userId: 56,
    startTrail: function () {
        return "Trail Started";
    },
    getCoupon: function (coupon) {
        return "Gano! parce Gano!!!";
    }
};
