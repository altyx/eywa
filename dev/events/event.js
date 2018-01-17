System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Event;
    return {
        setters:[],
        execute: function() {
            Event = (function () {
                function Event(title, description, nbPlace, streetPlace, zipCode, city, frequence, date) {
                    this.title = title;
                    this.description = description;
                    this.nbPlace = nbPlace;
                    this.streetPlace = streetPlace;
                    this.zipCode = zipCode;
                    this.city = city;
                    this.frequence = frequence;
                    this.date = date;
                }
                return Event;
            }());
            exports_1("Event", Event);
        }
    }
});
//# sourceMappingURL=event.js.map