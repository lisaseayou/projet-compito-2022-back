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
var Document_model_1 = __importDefault(require("./Document.model"));
var Project_model_1 = __importDefault(require("./Project.model"));
var User_model_1 = __importDefault(require("./User.model"));
var Task = (function () {
    function Task() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }, { description: 'Id of the task' }),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'title of the task' }),
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'description of the task' }),
        __metadata("design:type", String)
    ], Task.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Status of the task' }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }, { description: 'Number of view of the task' }),
        __metadata("design:type", Number)
    ], Task.prototype, "view", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }),
        __metadata("design:type", String)
    ], Task.prototype, "dueDate", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Task.prototype, "initialSpentTime", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [type_graphql_1.Int]; }),
        __metadata("design:type", Array)
    ], Task.prototype, "additionalSpentTime", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }),
        __metadata("design:type", Number)
    ], Task.prototype, "advancement", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }),
        __metadata("design:type", Date)
    ], Task.prototype, "createdAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }),
        __metadata("design:type", Date)
    ], Task.prototype, "updatedAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return Project_model_1.default; }, { nullable: true }),
        __metadata("design:type", Project_model_1.default)
    ], Task.prototype, "project", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Comment_model_1.default]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Task.prototype, "comments", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Document_model_1.default]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Task.prototype, "documents", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [User_model_1.default]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Task.prototype, "users", void 0);
    Task = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Task);
    return Task;
}());
exports.default = Task;
//# sourceMappingURL=Task.model.js.map