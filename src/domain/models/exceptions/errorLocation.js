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
exports.ErrorLocation = void 0;
var ErrorLocation = /** @class */ (function (_super) {
    __extends(ErrorLocation, _super);
    function ErrorLocation(message) {
        if (message === void 0) { message = 'This vehicle is already parked at this location'; }
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ErrorLocation.prototype);
        return _this;
    }
    return ErrorLocation;
}(Error));
exports.ErrorLocation = ErrorLocation;
