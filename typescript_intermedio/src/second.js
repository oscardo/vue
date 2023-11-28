var Instagram = /** @class */ (function () {
    function Instagram(camaraMode, filter, burst) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(camaraMode, filter, burst, short) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        console.log("Story create!!!");
    };
    return Youtube;
}());
