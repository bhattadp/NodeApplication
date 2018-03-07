const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');//this is folder

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.routes.addRoutes(app);//routes.routes - module
routes.helloWorldRoutes.addRoutes(app);
routes.accountRoutes.addRoutes(app);

app.use((req, res, next) => {
    const err = new Error('Resource Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    config.logger.error(err.message);
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message
      }
    });
});

config.logger.info("Welcome to Basics of Node!!!");

module.exports = app;




