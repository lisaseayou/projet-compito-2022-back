"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var Status;
(function (Status) {
    Status["TO_DO"] = "\u00E0 faire";
    Status["IN_PROGRESS"] = "en cours";
    Status["FINISH"] = "termin\u00E9";
})(Status || (Status = {}));
(0, type_graphql_1.registerEnumType)(Status, {
    name: 'Status',
    description: 'The task status',
});
exports.default = Status;
//# sourceMappingURL=Status.enum.js.map