const randomColor = function(){
    const hex = '0123456789ABCDEF'; //ye hex num h
    let color = '#';

    for(let i = 0 ; i < 6 ; i++){//color 6 he num ka to lete h max
        color += hex[Math.floor(Math.random() * 16 )] // yaha per random index value ayenge(0-9)
    }
    return color;
}

console.log(randomColor());

let intervalId ;
const startChangingColor = function(){
    if(!intervalId){

        let intervalId = setInterval(changeBgColor ,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;// iski value ko null ker dena task hone k baad
};

document.querySelector('#start').addEventListener
('click' , startChangingColor);

document.querySelector('#stop').addEventListener
('click' , stopChangingColor);