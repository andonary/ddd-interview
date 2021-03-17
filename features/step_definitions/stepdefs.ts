import {Fleet} from "../../src/domain/models/fleet";
import {Vehicle} from "../../src/domain/models/vehicle";
import {Location} from "../../src/domain/models/location";
import {parkVehicleHandler} from "../../src/app/parkVehicleHandler";
import {registerVehicleHandler} from "../../src/app/registerVehicleHandler";
import {InMemoryFleetRepository} from "../../src/infra/repository/fleet-repository/inMemoryFleetRepository";

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('my fleet', function () {
    // @ts-ignore
    this.fleet = new Fleet();
});

Given('a vehicle', function () {
    // @ts-ignore
    this.vehicle = new Vehicle();
});

Given('I have registered this vehicle into my fleet', function () {
    // @ts-ignore
    this.registeredVehicle = this.fleet.listOfVehicles.find(vehicle => vehicle.id === this.vehicle.id);
});

Given('a location', function () {
    // @ts-ignore
    this.location = new Location();
});

When('I park my vehicle at this location', async function () {
    // @ts-ignore
    await parkVehicleHandler(this.vehicle, this.location);
});

Then('the known location of my vehicle should verify this location', function () {
    // @ts-ignore
    assert.strictEqual(this.location.vehicle, this.vehicle);
});

Given('my vehicle has been parked into this location', function () {
    // @ts-ignore
    this.location.addVehicle(this.vehicle);
});

When('I try to park my vehicle at this location', async function () {
    try {
        // @ts-ignore
        await parkVehicleHandler(this.vehicle, this.location);
    } catch (e) {
        // @ts-ignore
        this.resultPark = e.message;
    }
});

Then('I should be informed that my vehicle is already parked at this location', function () {
    // @ts-ignore
    assert.strictEqual(!!this.resultPark, true);
});

When('I register this vehicle into my fleet', async function () {
    // @ts-ignore
    this.fleetRepository = new InMemoryFleetRepository();
    // @ts-ignore
    await registerVehicleHandler(this.vehicle, this.fleet, this.fleetRepository);
});

Then('this vehicle should be part of my vehicle fleet', async function () {
    // @ts-ignore
    this.fleetRegistered = await this.fleetRepository.getAll();
    // @ts-ignore
    assert.strictEqual(!!this.fleetRegistered[0].listOfVehicles.find(vehicle => vehicle.id === this.vehicle.id), true);
});

When('I try to register this vehicle into my fleet', async function () {
    try {
        // @ts-ignore
        await registerVehicleHandler(this.vehicle, this.fleet);
    } catch (e) {
        // @ts-ignore
        this.resultRegistered = e.message;
    }
});

Then('I should be informed this this vehicle has already been registered into my fleet', function () {
    // @ts-ignore
    assert.strictEqual(!!this.resultRegistered, true);
});

Given('the fleet of another user', function () {
    // @ts-ignore
    this.anotherFleet = new Fleet();
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
    // @ts-ignore
    this.anotherFleet.addVehicle(this.vehicle);
});
