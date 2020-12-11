const participants = [
  'Chris',
  'Alexis',
  'Dan',
  'Grant',
  'Jeff',
  'Maggie',
  'Steve'
];

const createNameOption = (name) => {
  return $(`<option value ='${name}'></option>`).text(name);
};

$(document).ready(function() {


  participants.forEach(name => {
    $("#myList").append(createNameOption(name));
  });


});