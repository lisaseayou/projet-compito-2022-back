"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var apollo_server_express_1 = require("apollo-server-express");
var typedi_1 = require("typedi");
var crypto_1 = require("crypto");
var bcrypt = __importStar(require("bcrypt"));
var util_1 = require("util");
var auth_1 = __importStar(require("../utils/auth"));
var RecordNotFound_error_1 = __importDefault(require("../errors/RecordNotFound.error"));
var mail_1 = __importStar(require("../utils/mail"));
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.findAll = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.user.findMany({
                        include: {
                            notifications: true,
                            projects: true,
                            tasks: true,
                            comments: true,
                        },
                    })];
            });
        });
    };
    UserService.prototype.findByResetToken = function (ctx, resetToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, ctx.prisma.user.findUnique({
                        where: { resetToken: resetToken },
                        rejectOnNotFound: new RecordNotFound_error_1.default("Vous n'êtes pas autorisé à modifier le mot de passe de cet utilisateur."),
                    })];
            });
        });
    };
    UserService.prototype.register = function (ctx, data) {
        return __awaiter(this, void 0, void 0, function () {
            var name, email, roles, password, passwordConfirm, user, salt, passwordHashed, token, userToDb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = data.name, email = data.email, roles = data.roles, password = data.password, passwordConfirm = data.passwordConfirm;
                        return [4, ctx.prisma.user.findUnique({
                                where: { email: email },
                                rejectOnNotFound: false,
                            })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            throw new apollo_server_express_1.ApolloError('Un utilisateur avec cet email existe déjà.');
                        }
                        if (password !== passwordConfirm) {
                            throw new Error('Les mots de passe doivent être identiques.');
                        }
                        return [4, bcrypt.genSalt(10)];
                    case 2:
                        salt = _a.sent();
                        return [4, bcrypt.hash(password, salt)];
                    case 3:
                        passwordHashed = _a.sent();
                        token = (0, auth_1.default)({
                            name: name,
                            email: email,
                            roles: roles,
                        });
                        return [4, ctx.prisma.user.create({
                                data: {
                                    name: data.name,
                                    email: data.email,
                                    roles: data.roles,
                                    password: passwordHashed,
                                },
                                include: {
                                    notifications: true,
                                    projects: true,
                                    tasks: true,
                                    comments: true,
                                },
                            })];
                    case 4:
                        userToDb = _a.sent();
                        ctx.res.cookie('token', token, {
                            secure: process.env.NODE_ENV === 'production',
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 7,
                            sameSite: 'strict',
                        });
                        return [2, __assign(__assign({}, userToDb), { success: true })];
                }
            });
        });
    };
    UserService.prototype.login = function (ctx, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, match, name, roles, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ctx.prisma.user.findUnique({
                            where: { email: email },
                            rejectOnNotFound: new RecordNotFound_error_1.default('Vérifiez vos informations de connexion.'),
                        })];
                    case 1:
                        user = _a.sent();
                        return [4, bcrypt.compare(password, user.password)];
                    case 2:
                        match = _a.sent();
                        if (!match) {
                            throw new apollo_server_express_1.ApolloError('Vérifiez vos informations de connexion.');
                        }
                        name = user.name, roles = user.roles;
                        token = (0, auth_1.default)({ name: name, email: email, roles: roles });
                        ctx.res.cookie('token', token, {
                            secure: process.env.NODE_ENV === 'production',
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 7,
                            sameSite: 'strict',
                        });
                        return [2, __assign(__assign({}, user), { success: true })];
                }
            });
        });
    };
    UserService.prototype.logout = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.res.clearCookie('token');
                return [2, 'Vous êtes bien déconnecté.'];
            });
        });
    };
    UserService.prototype.updateOne = function (ctx, id, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function () {
            var name, email, roles, password, description, url, twitter, linkedin, github, userToUpdate, userUpdated;
            return __generator(this, function (_k) {
                name = data.name, email = data.email, roles = data.roles, password = data.password, description = data.description, url = data.url, twitter = data.twitter, linkedin = data.linkedin, github = data.github;
                userToUpdate = ctx.prisma.user.findUnique({
                    where: { id: id },
                });
                userUpdated = ctx.prisma.user.update({
                    where: { id: id },
                    data: {
                        name: (_a = userToUpdate.name) !== null && _a !== void 0 ? _a : name,
                        email: (_b = userToUpdate.email) !== null && _b !== void 0 ? _b : email,
                        roles: (_c = userToUpdate.roles) !== null && _c !== void 0 ? _c : roles,
                        password: (_d = userToUpdate.password) !== null && _d !== void 0 ? _d : password,
                        description: (_e = userToUpdate.description) !== null && _e !== void 0 ? _e : description,
                        url: (_f = userToUpdate.url) !== null && _f !== void 0 ? _f : url,
                        twitter: (_g = userToUpdate.twitter) !== null && _g !== void 0 ? _g : twitter,
                        linkedin: (_h = userToUpdate.linkedin) !== null && _h !== void 0 ? _h : linkedin,
                        github: (_j = userToUpdate.github) !== null && _j !== void 0 ? _j : github,
                    },
                    include: {
                        notifications: true,
                        projects: true,
                        tasks: true,
                        comments: true,
                    },
                });
                return [2, userUpdated];
            });
        });
    };
    UserService.prototype.deleteOne = function (ctx, id) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            return __generator(this, function (_a) {
                currentUser = ctx.prisma.user.delete({
                    where: { id: id },
                    include: {
                        notifications: true,
                        projects: true,
                        tasks: true,
                        comments: true,
                    },
                });
                return [2, currentUser];
            });
        });
    };
    UserService.prototype.requestResetPassword = function (ctx, email) {
        return __awaiter(this, void 0, void 0, function () {
            var randomBytesPromisified, resetToken, resetTokenExpiry, updatedUser, passwordResetUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ctx.prisma.user.findUnique({
                            where: { email: email },
                            rejectOnNotFound: new RecordNotFound_error_1.default("Aucun compte n'est associé avec cet email."),
                        })];
                    case 1:
                        _a.sent();
                        randomBytesPromisified = (0, util_1.promisify)(crypto_1.randomBytes);
                        return [4, randomBytesPromisified(20)];
                    case 2:
                        resetToken = (_a.sent()).toString('hex');
                        resetTokenExpiry = Date.now() + 3600000;
                        return [4, ctx.prisma.user.update({
                                where: { email: email },
                                data: {
                                    resetToken: resetToken,
                                    resetTokenExpiry: resetTokenExpiry,
                                },
                                include: {
                                    notifications: true,
                                    projects: true,
                                    tasks: true,
                                    comments: true,
                                },
                            })];
                    case 3:
                        updatedUser = _a.sent();
                        passwordResetUrl = process.env.NODE_ENV === 'development'
                            ? "http://".concat(process.env.CLIENT_URI, "auth/reset-password/").concat(resetToken)
                            : "https://".concat(process.env.CLIENT_URI, "auth/reset-password/").concat(resetToken);
                        return [4, mail_1.default.sendMail({
                                from: process.env.MAIL_SENDER,
                                to: updatedUser.email,
                                subject: 'Demande de changement de mot de passe sur Compito',
                                html: (0, mail_1.passwordResetEmail)("Voici le lien pour d\u00E9finir un nouveau mot de passe.\n      \n\n\n      <a href=\"".concat(passwordResetUrl, "\">Cliquer sur ce lien</a>")),
                            })];
                    case 4:
                        _a.sent();
                        return [2, updatedUser];
                }
            });
        });
    };
    UserService.prototype.resetPassword = function (ctx, email, password, passwordConfirm, resetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var user, salt, hashedPassword, updatedUser, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (password !== passwordConfirm) {
                            throw new Error('Les mots de passe doivent être identiques.');
                        }
                        return [4, ctx.prisma.user.findFirst({
                                where: {
                                    email: email,
                                    resetToken: resetToken,
                                },
                                rejectOnNotFound: new Error("Vous n'êtes pas autorisé à modifier le mot de passe de cet utilisateur."),
                            })];
                    case 1:
                        user = _a.sent();
                        return [4, bcrypt.genSalt(10)];
                    case 2:
                        salt = _a.sent();
                        return [4, bcrypt.hash(password, salt)];
                    case 3:
                        hashedPassword = _a.sent();
                        return [4, ctx.prisma.user.update({
                                where: { email: user.email },
                                data: {
                                    password: hashedPassword,
                                    resetToken: null,
                                    resetTokenExpiry: null,
                                },
                                include: {
                                    notifications: true,
                                    projects: true,
                                    tasks: true,
                                    comments: true,
                                },
                            })];
                    case 4:
                        updatedUser = _a.sent();
                        return [4, mail_1.default.sendMail({
                                from: process.env.MAIL_SENDER,
                                to: updatedUser.email,
                                subject: 'Changement de mot de passe sur Compito',
                                html: (0, mail_1.passwordResetEmail)("Votre mot de passe a \u00E9t\u00E9 chang\u00E9 avec succ\u00E8s!"),
                            })];
                    case 5:
                        _a.sent();
                        token = (0, auth_1.generateTokenResetPassword)(updatedUser);
                        ctx.res.cookie('token', token, {
                            secure: process.env.NODE_ENV === 'production',
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24,
                            sameSite: 'strict',
                        });
                        return [2, updatedUser];
                }
            });
        });
    };
    UserService = __decorate([
        (0, typedi_1.Service)()
    ], UserService);
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=User.service.js.map