const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// if they send a get request to api, look in response body for id
router.get('/followed', (req, res) => {
  const id = req.cookies.centssid;
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../../dist/login.html'));
});

router.post('/', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/feed');
});

module.exports = router;
