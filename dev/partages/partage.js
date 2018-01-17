System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Partage;
    return {
        setters:[],
        execute: function() {
            Partage = (function () {
                function Partage(_id, user_id, content, dateCreation, _delete) {
                    this._id = _id;
                    this.user_id = user_id;
                    this.content = content;
                    this.dateCreation = dateCreation;
                    this._delete = _delete;
                }
                return Partage;
            }());
            exports_1("Partage", Partage);
        }
    }
});
//# sourceMappingURL=partage.js.map