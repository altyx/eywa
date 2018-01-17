System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Login;
    return {
        setters:[],
        execute: function() {
            Login = (function () {
                function Login(firstName, lastName, email, password, phone, mobile) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                    this.phone = phone;
                    this.mobile = mobile;
                }
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map