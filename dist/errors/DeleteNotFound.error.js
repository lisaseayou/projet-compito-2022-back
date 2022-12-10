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
var DeleteNotFoundError = (function (_super) {
    __extends(DeleteNotFoundError, _super);
    function DeleteNotFoundError(message, extensions) {
        var _this = _super.call(this, message, 'DELETE_RECORD_NOT_FOUND', extensions) || this;
        Object.defineProperty(_this, 'name', { value: 'DeleteNotFoundError' });
        return _this;
    }
    return DeleteNotFoundError;
}(apollo_server_core_1.ApolloError));
exports.default = DeleteNotFoundError;
//# sourceMappingURL=DeleteNotFound.error.js.map