console.log("....number coversion....");

let score ="33abc";
console.log(typeof score);
console.log(typeof (score));

//coverting string to number...
let val=Number(score);

console.log(typeof val);
// here in actual 33abc can't be a number 
// lets print the actual value on converting the string to num
//"33"<-its easy to convert it into a number 
console.log(val);
/*
output:- NAN
 val print karenge, to yeh "number" dikhai dega,
  jo dikhata hai ki val ab numeric type ka hai.

Lekin, original string "33abc" mein numeric digits ke alawa aur characters bhi hain,
 isliye conversion se NaN (Not a Number) milta ha
*/
console.log(" 1------------------------------------------------------------");

let score2 =null;
console.log(typeof score2);
console.log(typeof (score2));

//coversion of null to number....
let val2=Number(score2);
let valk=String(score2);
let vale=String(val2);

console.log(typeof val2);
// if null converted to number then its output is 0;
// typeof null is always object....
console.log(val2);//null ko number mein convert karne ka result 0 hota hai
console.log(valk);
console.log(vale);

console.log("2------------------------------------------------------------");

let score3 =undefined;
console.log(typeof score3);
console.log(typeof(score3));

//conversion of undefined to number...
let val3=Number(score);

console.log(typeof val3);
// type of undefine is always undefined.
// In undefined we declare the variable but don't define the value for the variable.
console.log(val3);


console.log("3------------------------------------------------------------");

let score4 = true;
console.log(typeof score4);
console.log(typeof (score4));

// Converting boolean to number 
let val4 = Number(score4);
console.log(typeof val4);
// true = 1 & false = 0; 
console.log(val4);


console.log("4------------------------------------------------------------");

console.log("boolean conversion....");
let l=1;
// number coversion to boolean..
// true=1 & false = 0; 
let lb=Boolean(l);

console.log(lb);



let l2="";
// empty coversion boolean..
// for empty its op is false..
let lb2=Boolean(l2);

console.log(lb2);



let l3="hitesh";
//coversion of string to  boolean...
let lb3=Boolean(l3);

console.log(lb3);

console.log("5------------------------------------------------------------");

console.log("string coversion....")

let score6 ="33abc"
console.log(typeof score6);
console.log(typeof (score6));

let val6=String(score);
console.log(typeof val6);
// here in actual 33abc can't be a number.....
// lets print the actual value.......
console.log(val6);
console.log("------------------------------------------------------------");
let score7 =33;
console.log(typeof score7);
console.log(typeof (score7));

let val7=String(score7);
console.log(typeof val7);
// here in actual 33abc can't be a number...
// lets print the actual value...
console.log(val7);

console.log("------------------------------------------------------------");
let score8 =true;
console.log(typeof score8);
console.log(typeof (score8));

let val8=String(score8);
console.log(typeof val8);
// here in actual 33abc can't be a number 
// lets print the actual value 
console.log(val8);

console.log("------------------------------------------------------------");




