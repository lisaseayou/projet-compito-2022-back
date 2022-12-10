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
var AddDocumentInput = (function () {
    function AddDocumentInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Name of uploader file' }),
        (0, class_validator_1.Length)(3, 500, { message: validation_1.default.document.name }),
        __metadata("design:type", String)
    ], AddDocumentInput.prototype, "name", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.Int; }, { description: 'Size of uploader file' }),
        __metadata("design:type", Number)
    ], AddDocumentInput.prototype, "size", void 0);
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; }, { description: 'Task related to the file' }),
        __metadata("design:type", String)
    ], AddDocumentInput.prototype, "taskId", void 0);
    AddDocumentInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], AddDocumentInput);
    return AddDocumentInput;
}());
exports.default = AddDocumentInput;
//# sourceMappingURL=AddDocument.input.js.map