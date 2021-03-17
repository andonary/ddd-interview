import {Vehicle} from "./vehicle";
import {ErrorLocation} from "./exceptions/errorLocation";

export class Location {
    vehicle: Vehicle | undefined;

    addVehicle(myVehicle: Vehicle) {
        if (this.vehicle?.id === myVehicle.id) {
            throw new ErrorLocation();
        }
        this.vehicle = myVehicle;
    }
}
