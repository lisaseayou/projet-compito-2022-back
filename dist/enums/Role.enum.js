"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Role || (Role = {}));
(0, type_graphql_1.registerEnumType)(Role, {
    name: 'Role',
    description: 'The basic roles',
});
exports.default = Role;
//# sourceMappingURL=Role.enum.js.map