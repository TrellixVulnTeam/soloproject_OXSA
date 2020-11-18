const User = require('../models/userModel');

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
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  User.create(newUser, (err, user) => {
    if (err) {
      // send back to login page
      return next(err);
    }

    const userID = user.id;
    res.locals.userID = userID;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  const plainTextPass = req.body.password;

  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      // send back to login
      return next(err);
    }

    if (user['_doc']['password'] === req.body.password) {
      const userID = user.id;
      res.locals.userID = userID;

      return next();
    } else {
      return next();
    }
  });
};
