function add() {
  //.value is from the DOM
  //.valOne + .valTwo are class types assigned to the form elements
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  // var y = 2;
  var delta = (x + y);
  console.log(delta);
}

// when querySelector('onclick') onclick
function onclick() {
  
}
