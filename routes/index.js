const express = require('express');
const router = express.Router();

const { people } = require('../data');
const { sendEmail } = require('../message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Secret Santa' });
});

router.post('/', function(req, res, next) {
  const { name, address, wishlist } = req.body;

  const santa = people[name].santa;
  const santasEmail = people[santa].email;
  
  sendEmail('dpletzke@gmail.com', { msg:`${name} has answered` });
  sendEmail(santasEmail, { address, name, wishlist });
  
  res.render('index', { title: 'Secret Santa' }); 
});

module.exports = router;
