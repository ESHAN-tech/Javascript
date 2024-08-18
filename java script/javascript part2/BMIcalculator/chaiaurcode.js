const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
// submit hone k baad value ko extract kerenge 
form.addEventListener('submit', function (e) {
  e.preventDefault();
//yaha height ki value le , usee int me convert kiya
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  //yha result me value dalenge joke html me blank ker rakhe thay,isme value or parse int not need
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) 
  {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight))
  {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else 
  {
    //formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

});

