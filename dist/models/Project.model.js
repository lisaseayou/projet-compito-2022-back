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
var Task_model_1 = __importDefault(require("./Task.model"));
var User_model_1 = __importDefault(require("./User.model"));
var Project = (function () {
    function Project() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }, { description: 'Id of the project' }),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Name of the project' }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Description of the project' }),
        __metadata("design:type", String)
    ], Project.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, { description: 'Project creation date' }),
        __metadata("design:type", Date)
    ], Project.prototype, "createdAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, {
            description: 'Date of last modification of the project',
        }),
        __metadata("design:type", Date)
    ], Project.prototype, "updatedAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Task_model_1.default]; }, {
            nullable: true,
            description: 'List of tasks related to the project',
        }),
        __metadata("design:type", Array)
    ], Project.prototype, "tasks", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [User_model_1.default]; }, {
            nullable: true,
            description: 'list of users related to the project',
        }),
        __metadata("design:type", Array)
    ], Project.prototype, "users", void 0);
    Project = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Project);
    return Project;
}());
exports.default = Project;
//# sourceMappingURL=Project.model.js.map