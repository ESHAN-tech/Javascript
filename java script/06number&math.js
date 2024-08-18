// here automatically defined the 400 is number ...
const  score = 400;
console.log(score);

console.log("---------------------------------------------------");
//here specially cast the number 
//here some prototype properties (methods) were also present..
const balance = new Number(100);
console.log(balance);

//toString() method:-
console.log(balance.toString());

//when it convert into tyhe string then we can apply all the properties of string 
console.log(balance.toString().length);

//toFixed():- when you e-comerce website then  precision  value becomes very big like 19.56587678
console.log(balance.toFixed(2));// here 2 is precision value


//toPrecision():- used to give precisied value 
const anothernum=123.76786;
const anothernum2=1123.76786;
console.log(anothernum.toPrecision(3));//124 (focus on three value)
console.log(anothernum2.toPrecision(3));//1.12e+3 1.12-> precisied value and e+3 is exponential val

//toLocaleString():-
const hundreds=1000000000 // here dificult to see how many zeros are there...
console.log(hundreds.toLocaleString());

//for making it in indian standard form ...
console.log(hundreds.toLocaleString('en-IN'));
console.log("---------------------------------------------------");
//Number properties & THERE SOME IMPORTANT METHOD...

// .MAX_VALUE
console.log(Number.MAX_VALUE);// max value of number of js...
// .MIN_VALUE
console.log(Number.MIN_VALUE);
// .MAX_SAFE_INTEGER :- YE SAFE INTEGER H ITNA HE STORE KER SKTA HAI JS
console.log(Number.MAX_SAFE_INTEGER);

console.log("---------------------------------------------------");

//+++++++++ M A T H S +++++++++++
// MATHS lib comes with javascript by defaultly it also have proto types
// some important method of math...


//.abs ():- it's absolute method , it covert -ve value to +ve value..
console.log(Math.abs(-4));

//round():- it round-off the value ...
console.log(Math.round(4.9));

//ceil():- it give the top value i.e. 4.2,4.1,4.4 = 5
console.log(Math.ceil(4.2));

//floor():- gives the bottom value i.e 4.4,4.6,4.8,4.9 = 4
console.log(Math.floor(4.9));

//min():- gives min value in array...
console.log(Math.min(4 , 7 ,9 ,0 ,1));
// max():-
console.log(Math.max(4 , 7 ,9 ,0 ,1));

//why & where we use the math library...
//.random() :- its value is always in b/w the zero and one (mostly decimal)

console.log(Math.random());

// shifting 1 digit by multiply by 10 or shift value at left by multi by 10...
console.log(Math.random()*10);

// value may come zero also like 0.041634625667346.. to avoid this case add 1...
//assuming case that we get value greter then zero and it's min can be 1...
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10) +1 );
//some time cases comes to define the min and max in that case...
 const min = 10;
 const max = 20;//   here value is b/w 10 and 12

 console.log(Math.random()*(max - min + 1)) ;// by max - min get range of number & add 1 to avoid zero case

//here value comes les then min value but the range is from [10,20];
 //console.log(Math.floor(Math.random()*(max - min + 1))) ;

// add min to solve the above problem...
 console.log(Math.floor(Math.random()*(max - min + 1)) + min) ;

