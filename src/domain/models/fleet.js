"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
var errorRegisterFleet_1 = require("./exceptions/errorRegisterFleet");
var uuid_1 = require("uuid");
var Fleet = /** @class */ (function () {
    function Fleet() {
        this.id = uuid_1.v4();
        this.listOfVehicles = [];
    }
    Fleet.prototype.addVehicle = function (vehicle) {
        if (this.listOfVehicles.find(function (registeredVehicle) { return registeredVehicle.id === vehicle.id; })) {
            throw new errorRegisterFleet_1.ErrorRegisterFleet();
        }
        this.listOfVehicles.push(vehicle);
    };
    return Fleet;
}());
exports.Fleet = Fleet;
