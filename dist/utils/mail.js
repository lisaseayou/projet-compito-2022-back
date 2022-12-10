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
exports.passwordResetEmail = void 0;
var nodemailer = __importStar(require("nodemailer"));
var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '3569601b87946c',
        pass: '290e7c75b10f0b',
    },
});
var passwordResetEmail = function (text) { return "\n    <div className=\"email\" style=\"\n        border: 1px solid black;\n        padding: 20px;\n        font-family: sans-serif;\n        line-height: 2;\n        font-size: 20px;\n    \">\n        <h2>Bonjour</h2>\n        <p>".concat(text, "</p>\n        <p>Merci et \u00E0 bient\u00F4t.</p>\n        <p>L'\u00E9quipe Compito.</p>\n    </div>\n"); };
exports.passwordResetEmail = passwordResetEmail;
exports.default = transport;
//# sourceMappingURL=mail.js.map