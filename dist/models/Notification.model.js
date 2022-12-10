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
var type_graphql_1 = require("type-graphql");
var User_model_1 = __importDefault(require("./User.model"));
var Notification = (function () {
    function Notification() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }, { description: 'Id of the notification' }),
        __metadata("design:type", String)
    ], Notification.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Description of the notification' }),
        __metadata("design:type", String)
    ], Notification.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return Boolean; }, {
            description: 'Status of the notification, read or not',
        }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "isRead", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, {
            description: 'Notification creation date',
        }),
        __metadata("design:type", Date)
    ], Notification.prototype, "createdAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return User_model_1.default; }, { description: 'User related to the notification' }),
        __metadata("design:type", User_model_1.default)
    ], Notification.prototype, "user", void 0);
    Notification = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Notification);
    return Notification;
}());
exports.default = Notification;
//# sourceMappingURL=Notification.model.js.map