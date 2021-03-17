import {Vehicle} from "../models/vehicle";
import {Location} from "../models/location";

export class ParkVehicleUseCase {
    constructor() {
    }

    async execute(myVehicle: Vehicle, myLocation: Location) {
        myLocation.addVehicle(myVehicle);
        return Promise.resolve();
    }
}
