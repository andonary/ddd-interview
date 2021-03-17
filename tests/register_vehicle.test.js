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
var vehicle_1 = require("../src/domain/models/vehicle");
var inMemoryFleetRepository_1 = require("../src/infra/repository/fleet-repository/inMemoryFleetRepository");
var registerVehicleUseCase_1 = require("../src/domain/use-cases/registerVehicleUseCase");
var fleet_1 = require("../src/domain/models/fleet");
var errorRegisterFleet_1 = require("../src/domain/models/exceptions/errorRegisterFleet");
describe('Scenario: I can register a vehicle', function () {
    var myFleet;
    var myVehicle;
    var repository = new inMemoryFleetRepository_1.InMemoryFleetRepository();
    test('Given my fleet and a vehicle', function () {
        myFleet = new fleet_1.Fleet();
        myVehicle = new vehicle_1.Vehicle();
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
    });
    test('When I register this vehicle into my fleet', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new registerVehicleUseCase_1.RegisterVehicleUseCase(repository).execute(myVehicle, myFleet)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Then this vehicle should be part of my vehicle fleet', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fleetRegistered;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repository.getAll()];
                case 1:
                    fleetRegistered = _a.sent();
                    expect(fleetRegistered[0].listOfVehicles.find(function (vehicle) { return vehicle.id === myVehicle.id; })).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Scenario: I can't register same vehicle twice", function () {
    var myFleet;
    var myVehicle;
    var repository = new inMemoryFleetRepository_1.InMemoryFleetRepository();
    var result;
    test('Given my fleet, a vehicle and I have registered this vehicle into my fleet', function () {
        myFleet = new fleet_1.Fleet();
        myVehicle = new vehicle_1.Vehicle();
        myFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(myFleet.listOfVehicles.find(function (vehicle) { return vehicle.id === myVehicle.id; })).toBeDefined();
    });
    test('When I try to register this vehicle into my fleet', function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new registerVehicleUseCase_1.RegisterVehicleUseCase(repository).execute(myVehicle, myFleet)];
                case 1:
                    _a.sent();
                    fail('this should throw an error');
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    result = e_1.message;
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    test('Then I should be informed that this vehicle has already been registered into my fleet', function () {
        expect(result).toEqual(new errorRegisterFleet_1.ErrorRegisterFleet().message);
    });
});
describe('Scenario: Same vehicle can belong to more than one fleet', function () {
    var anotherFleet;
    var myFleet;
    var myVehicle;
    var repository = new inMemoryFleetRepository_1.InMemoryFleetRepository();
    test('Given my fleet, another fleet, a vehicle and this vehicle has been registered into the other user\'s fleet', function () {
        myFleet = new fleet_1.Fleet();
        anotherFleet = new fleet_1.Fleet();
        myVehicle = new vehicle_1.Vehicle();
        anotherFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(anotherFleet.listOfVehicles.find(function (vehicle) { return vehicle.id === myVehicle.id; })).toBeDefined();
    });
    test('When I register this vehicle into my fleet', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new registerVehicleUseCase_1.RegisterVehicleUseCase(repository).execute(myVehicle, myFleet)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Then this vehicle should be part of my vehicle fleet', function () {
        expect(myFleet.listOfVehicles.find(function (vehicle) { return vehicle.id === myVehicle.id; })).toBeDefined();
    });
});
