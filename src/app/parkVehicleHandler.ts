import {ParkVehicleUseCase} from "../domain/use-cases/parkVehicleUseCase";
import {Vehicle} from "../domain/models/vehicle";
import {Location} from "../domain/models/location";

export const parkVehicleHandler = async (myVehicle: Vehicle, myLocation: Location) => {
    return await new ParkVehicleUseCase().execute(myVehicle, myLocation);
}
