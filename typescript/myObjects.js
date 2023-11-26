"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Oscar',
    email: 'Osc@gl.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Oscardo', isPaid: true });
function createCourse() {
    return { name: 'Alberto', price: 223 };
}
createCourse();
function createUserSpecial(usuario) {
}
var usuario = User;
usuario.name = "Oswaldo";
usuario.email = "Oswaldo@com.co";
usuario.isActive = true;
createUserSpecial(usuario);
createUserSpecial({ name: "Soledad", email: "s@md.com", isActive: true });
var US = {
    _id: "1234",
    name: "Ricardo",
    email: "ricardo@gmail.com",
    isActive: true
};
