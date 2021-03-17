import {FleetRepository} from "../../../domain/ports/infra/fleetRepository";
import {Fleet} from "../../../domain/models/fleet";

export class InMemoryFleetRepository implements FleetRepository {
    private listOfFleets: Fleet[] = [];

    getAll() {
        return Promise.resolve(this.listOfFleets);
    }

    save(fleet: Fleet): Promise<void> {
        this.listOfFleets.push(fleet);
        return Promise.resolve();
    }
}
