var mathTotal;
// Used for direct HTML output
// var textResult;

//ADD
document.querySelector('.add').onclick = function () {
  // console.log('test');
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  if (Boolean(x) && Boolean(y)) {
  var delta = (x + y);
  // console.log(delta);
  // mathTotal = delta;
  document.querySelector('.mathOutput').value = String(delta);
  } else {
    alert('One of the numbers input is not an integer');
    // console.log('No soup for you.');
    // console.log(Boolean(x), Boolean(y));
  }
};

//SUBTRACT
document.querySelector('.subtract').onclick = function () {
  // console.log('test');
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  if (Boolean(x) && Boolean(y)) {
  var delta = (x - y);
  // console.log(delta);
  // mathTotal = delta;
  document.querySelector('.mathOutput').value = String(delta);
  } else {
    alert('One of the numbers input is not an integer');
    // console.log('No soup for you.');
    // console.log(Boolean(x), Boolean(y));
  }
};

//MUlTIPLY
document.querySelector('.multiply').onclick = function () {
  // console.log('test');
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  if (Boolean(x) && Boolean(y)) {
  var delta = (x * y);
  // console.log(delta);
  // mathTotal = delta;
  document.querySelector('.mathOutput').value = String(delta);
  } else {
    alert('One of the numbers input is not an integer');
    // console.log('No soup for you.');
    // console.log(Boolean(x), Boolean(y));
  }
};

//DIVIDE
document.querySelector('.divide').onclick = function () {
  // console.log('test');
  var x = Number(document.querySelector('.valOne').value);
  var y = Number(document.querySelector('.valTwo').value);
  if (Boolean(x) && Boolean(y)) {
  var delta = (x / y);
  // console.log(delta);
  // mathTotal = delta;
  document.querySelector('.mathOutput').value = String(delta);
  } else {
    alert('One of the numbers input is not an integer');
    // console.log('No soup for you.');
    // console.log(Boolean(x), Boolean(y));
  }
};

//Output to the input box
// document.querySelector('.mathOutput').textContent = String(mathTotal);

//Output directly to html file
// var result = "Your result is: " + String(mathTotal);
// document.querySelector('.resultText').textContent = result;
