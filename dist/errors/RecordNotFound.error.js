"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_core_1 = require("apollo-server-core");
var RecordNotFoundError = (function (_super) {
    __extends(RecordNotFoundError, _super);
    function RecordNotFoundError(message, extensions) {
        var _this = _super.call(this, message, 'RECORD_NOT_FOUND', extensions) || this;
        Object.defineProperty(_this, 'name', { value: 'NotFoundError' });
        return _this;
    }
    return RecordNotFoundError;
}(apollo_server_core_1.ApolloError));
exports.default = RecordNotFoundError;
//# sourceMappingURL=RecordNotFound.error.js.map