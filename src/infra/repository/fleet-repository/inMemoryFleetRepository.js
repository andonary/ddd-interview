"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryFleetRepository = void 0;
var InMemoryFleetRepository = /** @class */ (function () {
    function InMemoryFleetRepository() {
        this.listOfFleets = [];
    }
    InMemoryFleetRepository.prototype.getAll = function () {
        return Promise.resolve(this.listOfFleets);
    };
    InMemoryFleetRepository.prototype.save = function (fleet) {
        this.listOfFleets.push(fleet);
        return Promise.resolve();
    };
    return InMemoryFleetRepository;
}());
exports.InMemoryFleetRepository = InMemoryFleetRepository;
