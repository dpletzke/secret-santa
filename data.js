
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv')
const { participants } = require('./participants');

const people = participants.reduce((acc, e) => {
  acc[e.name] = { ...e, santa: null };
  return acc;
}, {});

//from https://github.com/jessabean/secret-santa-js

function shuffle(array) {
  var n = array.length, 
      i, 
      j;

  while(n) {
    i = Math.floor(Math.random() * n--);

    j = array[n];
    array[n] = array[i];
    array[i] = j;
  } 
}

function assignSantas(array, people) {

  if(!array || !array.length) {
    return null;
  }

  const santas = array.slice();
  shuffle(santas);

  for(let i=0; i<santas.length; i++) {
    const santa = santas[i];
    let recipient;
    // Assign santa to the person next to them to avoid assigning to self and avoid duplicate recipients
    if(i !== santas.length-1) {
      recipient = santas[i+1];
    } else {
      recipient = santas[0];      
    }
    people[recipient.name].santa = santa.name;
  }

}

assignSantas(participants, people);

const csv = new ObjectsToCsv(Object.values(people));

const writeToCSV = async csv => await csv.toDisk('./santaAssignments.csv');

writeToCSV(csv);

module.exports = { people };