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
var TakePhoto_ABS = /** @class */ (function () {
    function TakePhoto_ABS(camaraMode, filter, burst) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
    TakePhoto_ABS.prototype.getReelTime = function () {
        return 8;
    };
    return TakePhoto_ABS;
}());
var Instagram_dos = /** @class */ (function (_super) {
    __extends(Instagram_dos, _super);
    function Instagram_dos(camaraMode, filter, burst) {
        return _super.call(this, camaraMode, filter, burst) || this;
    }
    Instagram_dos.prototype.getSephia = function () {
        console.log("Algo que decir");
    };
    return Instagram_dos;
}(TakePhoto_ABS));
var CI = new Instagram_dos("foto1", "foto1", 3);
CI.getSephia();
CI.getReelTime();
