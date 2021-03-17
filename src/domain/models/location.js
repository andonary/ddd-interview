"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var errorLocation_1 = require("./exceptions/errorLocation");
var Location = /** @class */ (function () {
    function Location() {
    }
    Location.prototype.addVehicle = function (myVehicle) {
        var _a;
        if (((_a = this.vehicle) === null || _a === void 0 ? void 0 : _a.id) === myVehicle.id) {
            throw new errorLocation_1.ErrorLocation();
        }
        this.vehicle = myVehicle;
    };
    return Location;
}());
exports.Location = Location;
