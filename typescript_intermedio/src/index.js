/*
public
private o #
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//     email: string;
//     name: string;
//     readonly city: string = "Bogotá"
//     constructor(email:string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
//otra forma más general seria esta:
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._courseCount_Probar = 2;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "Apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "CourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        set: function (CourseNum) {
            if (CourseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = CourseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    //private _courseCount = 1; NO se puede acceder a este tipo de objeto YA que es privado
    subUser.prototype.changeCourseCount = function () {
        //this._courseCount = 1; marca error
        //mientras que este SI lo permte
        this._courseCount_Probar = 2;
    };
    return subUser;
}(User));
var hitest = new User("osc@r.com", "Oscardo");
