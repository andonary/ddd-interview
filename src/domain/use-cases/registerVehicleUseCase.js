"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterVehicleUseCase = void 0;
var RegisterVehicleUseCase = /** @class */ (function () {
    function RegisterVehicleUseCase(fleetRepository) {
        this.fleetRepository = fleetRepository;
    }
    RegisterVehicleUseCase.prototype.execute = function (vehicle, myFleet) {
        myFleet.addVehicle(vehicle);
        return this.fleetRepository.save(myFleet);
    };
    return RegisterVehicleUseCase;
}());
exports.RegisterVehicleUseCase = RegisterVehicleUseCase;
