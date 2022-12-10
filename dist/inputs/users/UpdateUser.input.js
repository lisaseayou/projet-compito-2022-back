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
var Role_enum_1 = __importDefault(require("../../enums/Role.enum"));
var validation_1 = __importDefault(require("../../utils/validation"));
var UpdateUserInput = (function () {
    function UpdateUserInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { nullable: true, description: 'Name of the user' }),
        (0, class_validator_1.Length)(3, 30, { message: validation_1.default.user.name }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { nullable: true, description: 'Email of the user' }),
        (0, class_validator_1.IsEmail)({}, { message: validation_1.default.user.email }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "email", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Role_enum_1.default]; }, { nullable: true, description: 'Roles of the user' }),
        __metadata("design:type", Array)
    ], UpdateUserInput.prototype, "roles", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Password of the user',
        }),
        (0, class_validator_1.MinLength)(8, { message: validation_1.default.user.password }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "password", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Web site of the user',
        }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "url", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'twitter username of the user',
        }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "twitter", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'linkedin username of the user',
        }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "linkedin", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Github username of the user',
        }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "github", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'description of the user',
        }),
        __metadata("design:type", String)
    ], UpdateUserInput.prototype, "description", void 0);
    UpdateUserInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], UpdateUserInput);
    return UpdateUserInput;
}());
exports.default = UpdateUserInput;
//# sourceMappingURL=UpdateUser.input.js.map