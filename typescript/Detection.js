"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function funcionValidar(valor) {
    if (typeof valor === "string") {
        return valor.toLocaleUpperCase();
    }
    return valor + 1;
}
function funcionValidar2(valor) {
    if (!valor) {
        console.log("por favor coloca un ID Valido!");
        return;
    }
    return valor.toLocaleUpperCase();
}
function IsAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
