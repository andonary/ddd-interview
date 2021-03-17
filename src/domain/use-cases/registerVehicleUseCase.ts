import {Vehicle} from "../models/vehicle";
import {FleetRepository} from "../ports/infra/fleetRepository";
import {Fleet} from "../models/fleet";

export class RegisterVehicleUseCase {
    constructor(private fleetRepository: FleetRepository) {
    }

    execute(vehicle: Vehicle, myFleet: Fleet) {
        myFleet.addVehicle(vehicle);
        return this.fleetRepository.save(myFleet);
    }
}
