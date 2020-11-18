const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );

    res.locals.users = users;
    return next();
  });
};

userController.createUser = (req, res, next) => {
  console.log('req body includes', req.body);
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  User.create(newUser, (err, user) => {
    console.log('user is', user);
    if (err) {
      // send back to login page
      return next({
        log: 'Error in userController.createUser User.create',
        message: { Error: 'Error in User.create' },
      });
    }

    const userID = user.id;
    res.locals.userID = userID;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  console.log('verifying user');
  const plainTextPass = req.body.password;

  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      // send back to login
      return next(err);
    }

    if (user === null) return res.redirect('/login');

    bcrypt.compare(plainTextPass, user['_doc']['password'], (err, result) => {
      if (err) {
        return res.redirect('/login');
      }

      if (result) {
        const userID = user.id;
        const followed = user.followed;
        res.locals.userID = userID;
        res.locals.followed = followed;
        // console.log('leaving verify, res.locals includes', res.locals);
        return next();
      } else {
        return res.redirect('/login');
      }
    });
  });
};

module.exports = userController;
