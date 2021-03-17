"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRegisterFleet = void 0;
var ErrorRegisterFleet = /** @class */ (function (_super) {
    __extends(ErrorRegisterFleet, _super);
    function ErrorRegisterFleet(message) {
        if (message === void 0) { message = 'This vehicle is already registered'; }
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ErrorRegisterFleet.prototype);
        return _this;
    }
    return ErrorRegisterFleet;
}(Error));
exports.ErrorRegisterFleet = ErrorRegisterFleet;
