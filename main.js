function add() {
  //.value is from the DOM
  //.valOne + .valTwo are class types assigned to the form elements
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  // var y = 2;
  var delta = (x + y);
  console.log(delta);
}

document.querySelector('.click').onclick = function () {
  console.log('test');
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  // var y = 2;
  var delta = (x + y);
  console.log(delta);
 
};

// when querySelector('onclick') onclick
// function onclick() {
//   // var x = document.querySelector('.click').onclick;
//   console.log(x);
//   if (x !== null) {
//     console.log("Test");
//   }
//   else {
//     console.log("Nope. Didn't work.");
//   }
// }

// onclick();
