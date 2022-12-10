"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var typedi_1 = require("typedi");
var RecordNotFound_error_1 = __importDefault(require("../errors/RecordNotFound.error"));
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.findAll = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.task.findMany({
                        include: {
                            project: true,
                            comments: true,
                            documents: true,
                            users: true,
                        },
                    })];
            });
        });
    };
    TaskService.prototype.findByProject = function (ctx, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.task.findMany({
                        where: { project: { is: { id: projectId } } },
                        orderBy: { updatedAt: 'asc' },
                        include: {
                            project: true,
                            comments: true,
                            documents: true,
                            users: true,
                        },
                    })];
            });
        });
    };
    TaskService.prototype.findByDay = function (ctx, userId, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.task.findMany({
                        where: { users: { some: { id: userId } } },
                        take: limit,
                        include: {
                            project: true,
                            comments: true,
                            documents: true,
                            users: true,
                        },
                    })];
            });
        });
    };
    TaskService.prototype.findOne = function (ctx, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.task.findUnique({
                        where: { id: id },
                        include: {
                            project: true,
                            comments: true,
                            documents: true,
                            users: true,
                        },
                        rejectOnNotFound: new RecordNotFound_error_1.default("Le projet avec cet id n'existe pas"),
                    })];
            });
        });
    };
    TaskService.prototype.findLast = function (ctx, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.project.findMany({
                        take: limit,
                        orderBy: { updatedAt: 'desc' },
                        include: {
                            project: true,
                            comments: true,
                            documents: true,
                            users: true,
                        },
                    })];
            });
        });
    };
    TaskService.prototype.save = function (ctx, data) {
        return __awaiter(this, void 0, void 0, function () {
            var name, description, status, dueDate, initialSpentTime, additionalSpentTime, advancement, projectId, userId, taskToDb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = data.name, description = data.description, status = data.status, dueDate = data.dueDate, initialSpentTime = data.initialSpentTime, additionalSpentTime = data.additionalSpentTime, advancement = data.advancement, projectId = data.projectId, userId = data.userId;
                        return [4, ctx.prisma.task.create({
                                data: {
                                    name: name,
                                    description: description,
                                    view: 0,
                                    status: status,
                                    dueDate: dueDate,
                                    initialSpentTime: initialSpentTime,
                                    additionalSpentTime: additionalSpentTime,
                                    advancement: advancement,
                                    project: {
                                        connect: { id: projectId },
                                    },
                                    users: {
                                        connect: [{ id: userId }],
                                    },
                                },
                                include: {
                                    project: true,
                                    comments: true,
                                    documents: true,
                                    users: true,
                                },
                            })];
                    case 1:
                        taskToDb = _a.sent();
                        return [2, taskToDb];
                }
            });
        });
    };
    TaskService.prototype.updateOne = function (ctx, id, data) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function () {
            var name, description, view, status, dueDate, additionalSpentTime, advancement, projectId, userId, taskToUpdate, taskUpdated;
            return __generator(this, function (_h) {
                name = data.name, description = data.description, view = data.view, status = data.status, dueDate = data.dueDate, additionalSpentTime = data.additionalSpentTime, advancement = data.advancement, projectId = data.projectId, userId = data.userId;
                taskToUpdate = ctx.prisma.task.findUnique({
                    where: { id: id },
                });
                taskUpdated = ctx.prisma.task.update({
                    where: { id: id },
                    data: {
                        name: (_a = taskToUpdate.name) !== null && _a !== void 0 ? _a : name,
                        description: (_b = taskToUpdate.description) !== null && _b !== void 0 ? _b : description,
                        view: (_c = taskToUpdate.view) !== null && _c !== void 0 ? _c : view,
                        status: (_d = taskToUpdate.status) !== null && _d !== void 0 ? _d : status,
                        dueDate: (_e = taskToUpdate.dueDate) !== null && _e !== void 0 ? _e : dueDate,
                        additionalSpentTime: (_f = taskToUpdate.additionalSpentTime) !== null && _f !== void 0 ? _f : additionalSpentTime,
                        advancement: (_g = taskToUpdate.advancement) !== null && _g !== void 0 ? _g : advancement,
                        project: {
                            connect: { id: projectId },
                        },
                        users: userId
                            ? {
                                connect: [{ id: userId }],
                            }
                            : {},
                    },
                    include: {
                        project: true,
                        comments: true,
                        documents: true,
                        users: true,
                    },
                });
                return [2, taskUpdated];
            });
        });
    };
    TaskService.prototype.deleteOne = function (ctx, id) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTask;
            return __generator(this, function (_a) {
                currentTask = ctx.prisma.task.delete({
                    where: {
                        id: id,
                    },
                    include: {
                        project: true,
                        comments: true,
                        documents: true,
                        users: true,
                    },
                });
                return [2, currentTask];
            });
        });
    };
    TaskService = __decorate([
        (0, typedi_1.Service)()
    ], TaskService);
    return TaskService;
}());
exports.default = TaskService;
//# sourceMappingURL=Task.service.js.map