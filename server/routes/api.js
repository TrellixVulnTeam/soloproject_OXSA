const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// if they send a get request to api, look in response body for id
router.get('/followed', userController.getFollowed, (req, res) => {
  return res.status(200).send(JSON.stringify(res.locals.followed));
});

router.post('/followed', userController.updateFollowed, (req, res) => {
  return res.status(200).redirect('/feed');
});

module.exports = router;
