export class ErrorLocation extends Error {
    constructor(message: string = 'This vehicle is already parked at this location') {
        super(message);
        Object.setPrototypeOf(this, ErrorLocation.prototype);
    }
}
