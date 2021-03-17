import {Vehicle} from "./vehicle";
import {ErrorRegisterFleet} from "./exceptions/errorRegisterFleet";
import {v4} from "uuid";

export class Fleet {
    id: string = v4();
    listOfVehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle) {
        if (this.listOfVehicles.find(registeredVehicle => registeredVehicle.id === vehicle.id)) {
            throw new ErrorRegisterFleet();
        }
        this.listOfVehicles.push(vehicle);
    }
}
