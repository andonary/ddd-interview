"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var uuid_1 = require("uuid");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.id = uuid_1.v4();
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
