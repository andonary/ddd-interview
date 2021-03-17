import {Vehicle} from "../src/domain/models/vehicle";
import {InMemoryFleetRepository} from "../src/infra/repository/fleet-repository/inMemoryFleetRepository";
import {RegisterVehicleUseCase} from "../src/domain/use-cases/registerVehicleUseCase";
import {Fleet} from "../src/domain/models/fleet";
import {ErrorRegisterFleet} from "../src/domain/models/exceptions/errorRegisterFleet";

describe('Scenario: I can register a vehicle', () => {
    let myFleet: Fleet;
    let myVehicle: Vehicle;
    let repository = new InMemoryFleetRepository();

    test('Given my fleet and a vehicle', () => {
        myFleet = new Fleet();
        myVehicle = new Vehicle();
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
    });

    test('When I register this vehicle into my fleet', async () => {
        await new RegisterVehicleUseCase(repository).execute(myVehicle, myFleet);
    });

    test('Then this vehicle should be part of my vehicle fleet', async () => {
        const fleetRegistered: Fleet[] = await repository.getAll();
        expect(fleetRegistered[0].listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });
})

describe(`Scenario: I can't register same vehicle twice`, () => {
    let myFleet: Fleet;
    let myVehicle: Vehicle;
    let repository = new InMemoryFleetRepository();
    let result: string;

    test('Given my fleet, a vehicle and I have registered this vehicle into my fleet', () => {
        myFleet = new Fleet();
        myVehicle = new Vehicle();
        myFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(myFleet.listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });

    test('When I try to register this vehicle into my fleet', async () => {
        try {
            await new RegisterVehicleUseCase(repository).execute(myVehicle, myFleet);
            fail('this should throw an error');
        } catch (e) {
            result = e.message;
        }
    });

    test('Then I should be informed that this vehicle has already been registered into my fleet', () => {
        expect(result).toEqual(new ErrorRegisterFleet().message);
    });
})

describe('Scenario: Same vehicle can belong to more than one fleet', () => {
    let anotherFleet: Fleet;
    let myFleet: Fleet;
    let myVehicle: Vehicle;
    let repository = new InMemoryFleetRepository();

    test('Given my fleet, another fleet, a vehicle and this vehicle has been registered into the other user\'s fleet', () => {
        myFleet = new Fleet();
        anotherFleet = new Fleet();
        myVehicle = new Vehicle();
        anotherFleet.addVehicle(myVehicle);
        expect(myFleet.id).toBeDefined();
        expect(myVehicle.id).toBeDefined();
        expect(anotherFleet.listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });

    test('When I register this vehicle into my fleet', async () => {
        await new RegisterVehicleUseCase(repository).execute(myVehicle, myFleet);
    });

    test('Then this vehicle should be part of my vehicle fleet', () => {
        expect(myFleet.listOfVehicles.find(vehicle => vehicle.id === myVehicle.id)).toBeDefined();
    });
})
