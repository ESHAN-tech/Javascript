/*

There are 7 data type ...........................
1)string , 2) boolean ,3)number ,4) null , 5) undefined 
6)BigInt 7)Symbol

*/

//string...
const a="hello";
console.log(a);
console.log(typeof(a));
console.log("-----------------------------------------");

//number ....
const b=89;
console.log(b);
console.log(typeof(b));
console.log("-----------------------------------------");

//boolean ....
const c= true;
console.log(c);
console.log(+c);
console.log(+"");
console.log(typeof(c));
console.log("-----------------------------------------");

//Symbol ....
const d = Symbol ("123");
const e = Symbol ("123");
console.log(d==e);
console.log(typeof(d));
console.log("-----------------------------------------");

//null
const f=null;
let val = Number(f);//coverting null into the num
console.log(f);
console.log(val);
console.log(typeof(f));
console.log("-----------------------------------------");

//undefined...
// getting error while using the const in undefined.

let g ;
console.log(g);
console.log(typeof(g));
console.log("-----------------------------------------");

//BigInt...

const BigIntno =1154448182n;
console.log(BigIntno);
console.log(typeof(BigIntno));

console.log("-----------------------------------------");


// non premitive type data or refrencial...

// array...
 let hero =["shaktiman" , "naagraj" , "doga" , "krish"];
console.log(hero);
console.log(typeof(hero));
console.log("-----------------------------------------");

 //object ...
 let myobj = {
    name:"eshan",
    age :21,
 }
 console.log(myobj);
 console.log(typeof(myobj));
 
 console.log("-----------------------------------------");

 // function....
 const k =function(){
    console.log("hello world");

 }
console.log(k);


//checking data type of all
console.log(typeof(k));
