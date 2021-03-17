import {Fleet} from "../src/domain/models/fleet";
import {Vehicle} from "../src/domain/models/vehicle";
import {Location} from "../src/domain/models/location";
import {ParkVehicleUseCase} from "../src/domain/use-cases/parkVehicleUseCase";
import {ErrorLocation} from "../src/domain/models/exceptions/errorLocation";

describe(`Scenario: Successfully park a vehicle`, () => {
    let myFleet: Fleet;
    let myVehicle: Vehicle;
    let myLocation: Location;

    test('Given my fleet, a vehicle and I have registered this vehicle into my fleet', () => {
        myFleet = new Fleet();
        myVehicle = new Vehicle();
        myFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(myFleet.listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });

    test('And Given a location', () => {
        myLocation = new Location();
        expect(myLocation).toBeDefined();
        expect(myLocation.vehicle).not.toBeDefined();
    });

    test('When I park my vehicle at this location', async () => {
        await new ParkVehicleUseCase().execute(myVehicle, myLocation);
    });

    test('Then the known location of my vehicle should verify this location', () => {
        expect(myLocation.vehicle).toStrictEqual(myVehicle);
    });
})

describe(`Scenario: Can't localize my vehicle to the same location two times in a row`, () => {
    let myFleet: Fleet;
    let myVehicle: Vehicle;
    let myLocation: Location;
    let result: string;

    test('Given my fleet, a vehicle and I have registered this vehicle into my fleet', () => {
        myFleet = new Fleet();
        myVehicle = new Vehicle();
        myFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(myFleet.listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });

    test('And Given a location', () => {
        myLocation = new Location();
        expect(myLocation).toBeDefined();
        expect(myLocation.vehicle).not.toBeDefined();
    });

    test('And my vehicle has been parked into this location', () => {
        myLocation.addVehicle(myVehicle);
        expect(myLocation.vehicle).toStrictEqual(myVehicle);
    });

    test('When I try to park my vehicle at this location', async () => {
        try {
            await new ParkVehicleUseCase().execute(myVehicle, myLocation);
            fail('this should fail');
        } catch (e) {
            result = e.message;
        }
    });

    test('Then I should be informed that my vehicle is already parked at this location', () => {
        expect(result).toEqual(new ErrorLocation().message);
    });
})
