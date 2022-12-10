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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var typedi_1 = require("typedi");
var Task_model_1 = __importDefault(require("../models/Task.model"));
var Task_service_1 = __importDefault(require("../services/Task.service"));
var AddTask_input_1 = __importDefault(require("../inputs/tasks/AddTask.input"));
var UpdateTask_input_1 = __importDefault(require("../inputs/tasks/UpdateTask.input"));
var TaskResolver = (function () {
    function TaskResolver(taskService) {
        this.taskService = taskService;
    }
    TaskResolver.prototype.allTasks = function (ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.findAll(ctx)];
            });
        });
    };
    TaskResolver.prototype.tasksByProject = function (projectId, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.findByProject(ctx, projectId)];
            });
        });
    };
    TaskResolver.prototype.tasksByDay = function (userId, limit, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.findByDay(ctx, userId, limit)];
            });
        });
    };
    TaskResolver.prototype.task = function (id, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.findOne(ctx, id)];
            });
        });
    };
    TaskResolver.prototype.lastTasks = function (limit, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.findLast(ctx, limit)];
            });
        });
    };
    TaskResolver.prototype.addTask = function (data, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.save(ctx, data)];
            });
        });
    };
    TaskResolver.prototype.deleteTask = function (id, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.deleteOne(ctx, id)];
            });
        });
    };
    TaskResolver.prototype.updateTask = function (id, data, ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (_a = this === null || this === void 0 ? void 0 : this.taskService) === null || _a === void 0 ? void 0 : _a.updateOne(ctx, id, data)];
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Task_model_1.default, type_graphql_1.Query]; }, {
            description: 'Get all tasks',
            nullable: true,
        }),
        __param(0, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "allTasks", null);
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Task_model_1.default, type_graphql_1.Query]; }, {
            description: 'Get all tasks by user',
            nullable: true,
        }),
        __param(0, (0, type_graphql_1.Arg)('projectId')),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "tasksByProject", null);
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Task_model_1.default, type_graphql_1.Query]; }, {
            description: 'Get all tasks by day',
            nullable: true,
        }),
        __param(0, (0, type_graphql_1.Arg)('userId')),
        __param(1, (0, type_graphql_1.Arg)('limit')),
        __param(2, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "tasksByDay", null);
    __decorate([
        (0, type_graphql_1.Query)(function () { return Task_model_1.default; }, {
            description: 'Get one task by id',
            nullable: false,
        }),
        __param(0, (0, type_graphql_1.Arg)('id')),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "task", null);
    __decorate([
        (0, type_graphql_1.Query)(function () { return [Task_model_1.default, type_graphql_1.Query]; }, {
            description: 'Get last tasks',
            nullable: true,
        }),
        __param(0, (0, type_graphql_1.Arg)('limit')),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "lastTasks", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Task_model_1.default; }, {
            description: 'Add new task',
            nullable: false,
        }),
        __param(0, (0, type_graphql_1.Arg)('data')),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AddTask_input_1.default, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "addTask", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Task_model_1.default; }, {
            description: 'Delete task by id',
        }),
        __param(0, (0, type_graphql_1.Arg)('id')),
        __param(1, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "deleteTask", null);
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return Task_model_1.default; }, {
            description: 'Update task by id',
        }),
        __param(0, (0, type_graphql_1.Arg)('id')),
        __param(1, (0, type_graphql_1.Arg)('data')),
        __param(2, (0, type_graphql_1.Ctx)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, UpdateTask_input_1.default, Object]),
        __metadata("design:returntype", Promise)
    ], TaskResolver.prototype, "updateTask", null);
    TaskResolver = __decorate([
        (0, typedi_1.Service)(),
        (0, type_graphql_1.Resolver)(Task_model_1.default),
        __metadata("design:paramtypes", [Task_service_1.default])
    ], TaskResolver);
    return TaskResolver;
}());
exports.default = TaskResolver;
//# sourceMappingURL=Task.resolver.js.map