const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');

const mongoURI = 'mongodb://localhost/cents';
mongoose.connect(mongoURI);

// parse request body
app.use(express.json());

// define route handlers
// app.use('/api',)
app.get('/bundle.js', express.static(path.resolve(__dirname, '../dist/')));

// route handler to respond with main app
app.get('/feed', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/signup', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/signup.html'));
});

// app.post('/signup', userController.createUser, (req, res) => {
//   return res.redirect('/feed');
// });

app.get('/login', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist/login.html'));
});

// app.post('/login', userController.verifyUser, (req, res) => {
//   return res.redirect('/feed');
// });

// serve login page
app.get('/', (req, res) => {
  return res.redirect('/login');
});

// catch all 404
app.use('*', (req, res) => {
  res.status(404).send('nothing to see here!');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultError, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
