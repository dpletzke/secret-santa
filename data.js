const participants = [
  'Chris',
  'Alexis',
  'Dan',
  'Grant',
  'Jeff',
  'Maggie',
  'Steve'
];

const makeEmail = (i) => {
  const name = 'dpletzke'.split('');
  name.splice(i, 0, '.');
  return name.join('') + '@gmail.com';
}

const people = participants.reduce((acc, e, i) => {
  acc[e] = {
    name: e,
    email: makeEmail(i),
    santa: null
  };
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

  var santas = array.slice();
  shuffle(santas);

  for(var i=0; i<santas.length; i++) {
    var santa = santas[i],
        recipient;

    // Assign santa to the person next to them to avoid assigning to self and avoid duplicate recipients
    if(i !== santas.length-1) {
      recipient = santas[i+1];
    } else {
      recipient = santas[0];      
    }

    people[recipient].santa = people[santa].email;
  }

};

assignSantas(participants, people);

console.log(people);

module.exports = { people };