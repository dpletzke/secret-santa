const express = require('express');
const router = express.Router();

const ds = require('./data');
const { sendEmail } = require('./message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Secret Santa' });
});

router.post('/', function(req, res, next) {
  const { wisher, address, wishlist } = req.body;

  res.render('index', { title: 'Secret Santa' });

  sendEmail('dpletzke@gmail.com', { msg:`${wisher}` });
  sendEmail(, { msg:`${wisher}` });

});

module.exports = router;
