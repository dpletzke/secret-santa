const express = require('express');
const router = express.Router();
const neatCsv = require('neat-csv');
const fs = require('fs');
require('dotenv').config();

const { sendEmail } = require('../email');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Secret Santa' });
});

router.post('/', async function(req, res, next) {
  const { name, address, wishlist } = req.body;
  
  let peopleWithAssignments;
  
  fs.readFile('./.santaAssignments.csv', async (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const participants = await neatCsv(data);
    peopleWithAssignments = participants;
    
    const person = peopleWithAssignments.find(p => p.name === name); 
    const santa = person.santa;
    const santasEmail = peopleWithAssignments.find(p => p.name === santa).email;
    
    sendEmail(process.env.HOST_EMAIL, { msg:`${name} has answered` });
    sendEmail(santasEmail, { address, name, wishlist });
    
    res.render('index', { title: 'Secret Santa' }); 
  });
  
});

module.exports = router;
