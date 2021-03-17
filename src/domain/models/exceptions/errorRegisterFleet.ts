export class ErrorRegisterFleet extends Error {
    constructor(message: string = 'This vehicle is already registered') {
        super(message);
        Object.setPrototypeOf(this, ErrorRegisterFleet.prototype);
    }
}
