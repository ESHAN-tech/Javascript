const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') can be use

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // givs o/p in console i
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

