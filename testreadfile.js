const neatCsv = require('neat-csv');
const fs = require('fs');

fs.readFile('./santaAssignments.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const participants = await neatCsv(data);
  console.log(participants);
});