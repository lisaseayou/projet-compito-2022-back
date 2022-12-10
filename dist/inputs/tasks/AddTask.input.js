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
var Status_enum_1 = __importDefault(require("../../enums/Status.enum"));
var validation_1 = __importDefault(require("../../utils/validation"));
var AddTaskInput = (function () {
    function AddTaskInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }),
        (0, class_validator_1.Length)(3, 100, { message: validation_1.default.task.name }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'description of the task' }),
        (0, class_validator_1.Length)(3, 250, { message: validation_1.default.task.description }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return Status_enum_1.default; }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "status", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "dueDate", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }),
        __metadata("design:type", Number)
    ], AddTaskInput.prototype, "initialSpentTime", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return [type_graphql_1.Int]; }),
        __metadata("design:type", Array)
    ], AddTaskInput.prototype, "additionalSpentTime", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }),
        __metadata("design:type", Number)
    ], AddTaskInput.prototype, "advancement", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "projectId", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }),
        __metadata("design:type", String)
    ], AddTaskInput.prototype, "userId", void 0);
    AddTaskInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], AddTaskInput);
    return AddTaskInput;
}());
exports.default = AddTaskInput;
//# sourceMappingURL=AddTask.input.js.map