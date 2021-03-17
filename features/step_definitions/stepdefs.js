"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fleet_1 = require("../../src/domain/models/fleet");
var vehicle_1 = require("../../src/domain/models/vehicle");
var location_1 = require("../../src/domain/models/location");
var parkVehicleHandler_1 = require("../../src/app/parkVehicleHandler");
var registerVehicleHandler_1 = require("../../src/app/registerVehicleHandler");
var inMemoryFleetRepository_1 = require("../../src/infra/repository/fleet-repository/inMemoryFleetRepository");
var assert = require('assert');
var _a = require('@cucumber/cucumber'), Given = _a.Given, When = _a.When, Then = _a.Then;
Given('my fleet', function () {
    // @ts-ignore
    this.fleet = new fleet_1.Fleet();
});
Given('a vehicle', function () {
    // @ts-ignore
    this.vehicle = new vehicle_1.Vehicle();
});
Given('I have registered this vehicle into my fleet', function () {
    var _this = this;
    // @ts-ignore
    this.registeredVehicle = this.fleet.listOfVehicles.find(function (vehicle) { return vehicle.id === _this.vehicle.id; });
});
Given('a location', function () {
    // @ts-ignore
    this.location = new location_1.Location();
});
When('I park my vehicle at this location', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // @ts-ignore
                return [4 /*yield*/, parkVehicleHandler_1.parkVehicleHandler(this.vehicle, this.location)];
                case 1:
                    // @ts-ignore
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
Then('the known location of my vehicle should verify this location', function () {
    // @ts-ignore
    assert.strictEqual(this.location.vehicle, this.vehicle);
});
Given('my vehicle has been parked into this location', function () {
    // @ts-ignore
    this.location.addVehicle(this.vehicle);
});
When('I try to park my vehicle at this location', function () {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // @ts-ignore
                    return [4 /*yield*/, parkVehicleHandler_1.parkVehicleHandler(this.vehicle, this.location)];
                case 1:
                    // @ts-ignore
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    // @ts-ignore
                    this.resultPark = e_1.message;
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
Then('I should be informed that my vehicle is already parked at this location', function () {
    // @ts-ignore
    assert.strictEqual(!!this.resultPark, true);
});
When('I register this vehicle into my fleet', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // @ts-ignore
                    this.fleetRepository = new inMemoryFleetRepository_1.InMemoryFleetRepository();
                    // @ts-ignore
                    return [4 /*yield*/, registerVehicleHandler_1.registerVehicleHandler(this.vehicle, this.fleet, this.fleetRepository)];
                case 1:
                    // @ts-ignore
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
Then('this vehicle should be part of my vehicle fleet', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // @ts-ignore
                    _a = this;
                    return [4 /*yield*/, this.fleetRepository.getAll()];
                case 1:
                    // @ts-ignore
                    _a.fleetRegistered = _b.sent();
                    // @ts-ignore
                    assert.strictEqual(!!this.fleetRegistered[0].listOfVehicles.find(function (vehicle) { return vehicle.id === _this.vehicle.id; }), true);
                    return [2 /*return*/];
            }
        });
    });
});
When('I try to register this vehicle into my fleet', function () {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // @ts-ignore
                    return [4 /*yield*/, registerVehicleHandler_1.registerVehicleHandler(this.vehicle, this.fleet)];
                case 1:
                    // @ts-ignore
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    // @ts-ignore
                    this.resultRegistered = e_2.message;
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
Then('I should be informed this this vehicle has already been registered into my fleet', function () {
    // @ts-ignore
    assert.strictEqual(!!this.resultRegistered, true);
});
Given('the fleet of another user', function () {
    // @ts-ignore
    this.anotherFleet = new fleet_1.Fleet();
});
Given('this vehicle has been registered into the other user\'s fleet', function () {
    // @ts-ignore
    this.anotherFleet.addVehicle(this.vehicle);
});
