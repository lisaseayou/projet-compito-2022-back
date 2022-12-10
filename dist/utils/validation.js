"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors = {
    user: {
        name: 'Le nom doit contenir entre 8 et 30 caractères',
        email: "L'email doit être au bon format",
        password: 'Le mot de passe doit comporter 8 caractères minimum',
    },
    task: {
        name: 'Le sujet doit contenir entre 3 et 100 caractères',
        description: 'La description doit contenir entre 3 et 250 caractères',
    },
    project: {
        name: 'Le titre du projet doit contenir entre 3 et 100 caractères',
    },
    notification: {
        description: 'La description doit contenir entre 3 et 250 caractères',
    },
    document: {
        name: 'Le nom du document doit contenir entre 3 et 100 caractères',
        size: 'Le poids du fichier doit faire 5Mo maximun',
    },
    comment: {
        comment: 'Le commentaire doit contenir entre 3 et 500 caractères',
    },
};
exports.default = errors;
//# sourceMappingURL=validation.js.map