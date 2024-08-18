const buttons = document.querySelectorAll('.button');//here all button selected
const body = document.querySelector('body');// here body get selected

//sytax for using forEach Loop bcoz here we have node list
buttons.forEach(function (button) {

  console.log(button);
//button per ye method laga rhe h jaha per ham log click event he sunenge
  button.addEventListener('click', function (e) {// yaha 'e' event name h  
    console.log(e);

    console.log(e.target);// kis target se ye event aya h(y ,g , b)

    if (e.target.id === 'grey') 
    {
      /*
      body.style.backgroundColor = 'grey'
      or = e.target.id === 'grey' , they  both have same value 
       */
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') 
    {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') 
    {
      body.style.backgroundColor = e.target.id;
    }
    
    if (e.target.id === 'yellow') 
    {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') 
    {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
