var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var actuator = require('express-actuator');

var defaultRoute = require('./src/index');
var users = require('./src/routes/user.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/fav-icon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var options = {
  explorer: true,
  apis: ['./src/routes/user.routes.js'],
};

// swagger api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use('/', defaultRoute);

app.use('/user', users);

// health, metrics check
app.use('/management', actuator());

// handle 404
app.use((req, res, next) => {
  var err = new Error('Path Does Not Exist! Please Check the URL.');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
