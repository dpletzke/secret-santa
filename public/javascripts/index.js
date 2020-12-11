const participants = [
  'Chris',
  'Alexis',
  'Dan'
];

const createNameOption = (name) => {
  return $(`<option value ='${name}'></option>`).text(name);
};

$(document).ready(function() {


  participants.forEach(name => {
    $("#myList").append(createNameOption(name));
  });


});