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
var Comment = (function () {
    function Comment() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }, { description: 'Id of the comment' }),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Content of the comment' }),
        __metadata("design:type", String)
    ], Comment.prototype, "comment", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, { description: 'Comment creation date' }),
        __metadata("design:type", Date)
    ], Comment.prototype, "createdAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.GraphQLISODateTime; }, {
            description: 'Date of last modification of the comment',
        }),
        __metadata("design:type", Date)
    ], Comment.prototype, "updatedAt", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return Task_model_1.default; }, { description: 'Task related to the comment' }),
        __metadata("design:type", Task_model_1.default)
    ], Comment.prototype, "task", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return User_model_1.default; }, { description: 'User related to the comment' }),
        __metadata("design:type", User_model_1.default)
    ], Comment.prototype, "user", void 0);
    Comment = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Comment);
    return Comment;
}());
exports.default = Comment;
//# sourceMappingURL=Comment.model.js.map