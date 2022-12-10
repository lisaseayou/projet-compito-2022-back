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
var AddProjectInput = (function () {
    function AddProjectInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Name of the project' }),
        (0, class_validator_1.Length)(3, 100, { message: validation_1.default.project.name }),
        __metadata("design:type", String)
    ], AddProjectInput.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Description of the project' }),
        __metadata("design:type", String)
    ], AddProjectInput.prototype, "description", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, {
            description: 'ID of the user to link to the project',
        }),
        __metadata("design:type", String)
    ], AddProjectInput.prototype, "userId", void 0);
    AddProjectInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], AddProjectInput);
    return AddProjectInput;
}());
exports.default = AddProjectInput;
//# sourceMappingURL=AddProject.input.js.map