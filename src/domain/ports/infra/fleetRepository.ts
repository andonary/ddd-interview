import {Fleet} from "../../models/fleet";

export interface FleetRepository {
    save(fleet: Fleet): Promise<void>;
    getAll(): Promise<Fleet[]>;
}
