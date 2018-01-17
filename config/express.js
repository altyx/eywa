var express = require('express');
module.exports.http = {
customMiddleware: function (app) {
    app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
    app.use('/app', express.static(process.cwd() + '/app'));
    app.use('/views', express.static(process.cwd() + '/views'));
   }
};
