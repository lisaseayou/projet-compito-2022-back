"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var type_graphql_1 = require("type-graphql");
var validation_1 = __importDefault(require("../../utils/validation"));
var AddNotificationInput = (function () {
    function AddNotificationInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Description of the notification' }),
        (0, class_validator_1.Length)(3, 250, { message: validation_1.default.notification.description }),
        __metadata("design:type", String)
    ], AddNotificationInput.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return Boolean; }, {
            description: 'Status of the notification, read or not',
        }),
        __metadata("design:type", Boolean)
    ], AddNotificationInput.prototype, "isRead", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            description: 'ID of the user to link to the notification',
        }),
        __metadata("design:type", String)
    ], AddNotificationInput.prototype, "userId", void 0);
    AddNotificationInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], AddNotificationInput);
    return AddNotificationInput;
}());
exports.default = AddNotificationInput;
//# sourceMappingURL=AddNotification.input.js.map