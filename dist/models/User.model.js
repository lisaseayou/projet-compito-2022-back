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
var Comment_model_1 = __importDefault(require("./Comment.model"));
var Notification_model_1 = __importDefault(require("./Notification.model"));
var Project_model_1 = __importDefault(require("./Project.model"));
var Task_model_1 = __importDefault(require("./Task.model"));
var Role_enum_1 = __importDefault(require("../enums/Role.enum"));
var User = (function () {
    function User() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }, { description: 'Id of the user' }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Name of the user' }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Email of the user' }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Role_enum_1.default]; }, { description: 'Roles of the user' }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Password of the user' }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, {
            description: "The user's registration date",
        }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, {
            description: 'Date of last modification of user informations',
        }),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Web site of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "url", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Twitter username of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "twitter", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Linkedin username of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "linkedin", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'Github username of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "github", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'description of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            nullable: true,
            description: 'reset token of the user',
        }),
        __metadata("design:type", String)
    ], User.prototype, "resetToken", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }, {
            nullable: true,
            description: 'reset token expiry of the user',
        }),
        __metadata("design:type", Number)
    ], User.prototype, "resetTokenExpiry", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Notification_model_1.default]; }, {
            nullable: true,
            description: 'List of comments related to the user',
        }),
        __metadata("design:type", Array)
    ], User.prototype, "notifications", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Comment_model_1.default]; }, {
            nullable: true,
            description: 'List of comments related to the user',
        }),
        __metadata("design:type", Array)
    ], User.prototype, "comments", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Project_model_1.default]; }, {
            nullable: true,
            description: 'List of Projects related to the user',
        }),
        __metadata("design:type", Array)
    ], User.prototype, "projects", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Task_model_1.default]; }, {
            nullable: true,
            description: 'List of tasks related to the user',
        }),
        __metadata("design:type", Array)
    ], User.prototype, "tasks", void 0);
    User = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], User);
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.model.js.map