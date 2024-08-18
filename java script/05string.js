const name = "eshan";
const cgpa =8.5;
//console.log(name + cgpa+ "good");(old method)
//concatenating using '+'  not an good practice , so for that use backticks (``)

console.log(`hello my name is ${name} and my cgpa is ${cgpa}`);
console.log("---------------------------------------------");

//new way to declare the string is .... here we also tell the type of data....

const gamename = new String(`harsh`)

//some methods of string....

// accessing key value pair ...
console.log(gamename[0]);
console.log("---------------------------------------------");

//proto type access...(use two underscore)... gets empty obj but in actual its not empty..

console.log(gamename.__proto__ );

/* 
value inside the obj are which are not seems in op
h:0 ,a:1 ,r:2 , s:3 , h:4
and there where all method mentioned like tolower , toupper,chartat,substring ..
anchor() ,at() ,big() ,blink ,bold(), toString(), toWellFormed()
charCodeAt() , codePointAt() , concat() , String(), endsWith(), fixed(), fontcolor()
fontsize(), includes(), isWellFormed(), italics(), lastIndexOf(), link(), localeCompare()
match(), matchAll(), normalize(), padEnd(),padStart(),repeat(),replace()
replaceAll(),search(),small(),split() ,startsWith(),sub(),sup(),toLocaleUpperCase()
ƒ trim(),trimEnd ,trimEnd() ,trimLeft ,trimRight ,trimEnd() ,trimStart() ,valueOf()
*/

// we can easily access all the method of prototype (to lower to upper etc)similarly as length...


console.log("---------------------------------------------");

//length method...
console.log(gamename.length);

console.log("---------------------------------------------");

//uppercase method & lower case method...
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());

console.log("---------------------------------------------");

// accesing character at specific index ...
console.log(gamename.charAt(3));

console.log("---------------------------------------------");

//indexof():- used give index of any particular character...
console.log(gamename.indexOf('s'));

console.log("---------------------------------------------");

// substring ():- it break the string into substring...  
// if negative value pass in starting then it will stat with '0' index 
//if -ve value used at last then we don't get the output..


const newstring =gamename.substring(0,2);//here last value(2) is not included...
console.log(newstring);

// same - same but different ...
console.log(gamename.substring(0,2));

console.log("---------------------------------------------");

// slice():- here negative number can be given on giving the negative number it start with reverse.

const anotherstring= gamename.slice(-4,4);

/*
 h=0 , a =1, r=2 , s=3 , h=4       {harsh}
 h=-5, a=-4, r=-3, s=-2, h=-1
*/

console.log(anotherstring);
console.log(gamename.slice(-4,4));

console.log("---------------------------------------------");


//trim ():- it use removed the unwanted space which we don't want to save in the database.
//it is of two type start trim and end trim and it works on whitespace only

const string3="   eshan   ";
console.log("with trim=",string3.trim());
console.log("without trim =" , string3)


console.log("---------------------------------------------");


//  replace() :-  DEFINITION
/*our browser don't understand the space 
example web page name is( "http://eshan.com/eshan   tiwari) <- here space get left 
so brower at vacant place in urln coding means in percent ->
( "http://eshan.com/eshan%20tiwari) so if u wanted to remove (%20) use replace method..
*/

const url="http://eshan.com/eshan%20tiwari ";
console.log(url.replace("%20" , "_"));
console.log(url.replace("tiwari" , "TIWARI"));


console.log("---------------------------------------------");

// include();- it helps to know wetther the element is present or not..

console.log(url.includes('eshan'));

console.log("---------------------------------------------");

//split().............

console.log("   coverting string in array   ");

const hero = new String("shaktiman-krish-hulk");
// make array on the basis of space ..
//so for that use split method .. split on the basis of space .
console.log(hero);//original array 
console.log (hero.split('k'));// here split on the bASIS of 'k'
console.log (hero.split('-'));// here split on the bASIS of '-'

console.log("---------------------------------------------");

//small()
console.log(gamename.small());

console.log("---------------------------------------------");

//isWellFormed()
console.log(gamename.isWellFormed());

console.log("---------------------------------------------");

