import {RegisterVehicleUseCase} from "../domain/use-cases/registerVehicleUseCase";
import {Vehicle} from "../domain/models/vehicle";
import {Fleet} from "../domain/models/fleet";
import {FleetRepository} from "../domain/ports/infra/fleetRepository";

export const registerVehicleHandler = async (vehicle: Vehicle, fleet: Fleet, repository: FleetRepository) => {
    return await new RegisterVehicleUseCase(repository).execute(vehicle, fleet);
}
