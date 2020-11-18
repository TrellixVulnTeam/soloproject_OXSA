const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//routers
const apiRouter = require('./routes/api');
const loginRouter = require('./routes/login');

const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');
const userController = require('./controllers/userController');

const mongoURI = 'mongodb://127.0.0.1:27017/cents';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// parse request body
app.use(bodyParser.urlencoded());
app.use(express.json());

// parse cookies
app.use(cookieParser());

// define route handlers
// app.use('/api', apiRouter);

// serving bundle.js
app.get('/bundle.js', express.static(path.resolve(__dirname, '../dist/')));

// route handler to respond with main app
app.get('/feed', sessionController.isLoggedIn, (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/signup', cookieController.setCookie, (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/signup.html'));
});

app.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.redirect('/feed');
  }
);

// app.use('/login', loginRouter);
app.get('/login', cookieController.setCookie, (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/login.html'));
});

app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.redirect('/feed');
  }
);

app.get(
  '/logout',
  sessionController.endSession,
  cookieController.deleteSSIDCookie,
  (req, res) => {
    return res.redirect('/login');
  }
);

// serve login page
app.get('/', (req, res) => {
  return res.redirect('/login');
});

// catch all 404
app.use('*', (req, res) => {
  res.status(404).send('nothing to see here!');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
