"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.generateTokenResetPassword = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var generateToken = function (infos) {
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be set in environment');
    }
    var token = jwt.sign(infos, process.env.SECRET_KEY, {
        expiresIn: '7d',
    });
    return token;
};
var generateTokenResetPassword = function (user) {
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be set in environment');
    }
    var id = user.id, name = user.name, email = user.email;
    return jwt.sign({ id: id, name: name, email: email }, process.env.SECRET_KEY);
};
exports.generateTokenResetPassword = generateTokenResetPassword;
var getUser = function (token) {
    if (process.env.SECRET_KEY) {
        var payload = null;
        if (token) {
            try {
                payload = jwt.verify(token, process.env.SECRET_KEY);
            }
            catch (e) {
                payload = null;
            }
        }
        return payload;
    }
    return null;
};
exports.getUser = getUser;
exports.default = generateToken;
//# sourceMappingURL=auth.js.map