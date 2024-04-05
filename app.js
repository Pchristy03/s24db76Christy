var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const connectionString = process.env.MONGO_CON
var mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;
var Fig = require("./models/fig")

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Connection to DB succeeded")
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var figRouter = require('./routes/fig');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resouceRouter = require('./routes/resource')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fig', figRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resouceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// DATABASE STUFF

async function recreateDB() {
  await Fig.deleteMany();
//{'name': 'Brown Turkey', 'size': 'medium', 'age': '5', 'is_poisonous': true}
  let fig1 = new Fig({
    name: "Brown Turkey",
    size: "medium",
    age: 5,
    is_poisonous: true
  });

  let fig2 = new Fig({
    name: "Mission Fig",
    size: "large",
    age: 4,
    is_poisonous: false
  });

  let fig3 = new Fig({
    name: "Black Mission",
    size: "small",
    age: 3,
    is_poisonous: true
  });

  fig1.save().then(doc => {
    console.log("First Object saved")}
  ).catch(err => {
    console.error(err)
  });

  fig2.save().then(doc => {
    console.log("Second Object saved")}
  ).catch(err => {
    console.error(err)
  });

  fig3.save().then(doc => {
    console.log("Third Object saved")}
  ).catch(err => {
    console.error(err)
  });
}

let reseed = false;
if (reseed) {recreateDB();}
module.exports = app;
