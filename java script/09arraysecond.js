const marvel = ["iron man " , 'hulk' , " thor " ,"spiderman"];
const dc = ["flash" , "superman" , "batman" , "wonderwomen"];

marvel.push(dc);// here it take dc array as data, dc array behaves like single element in marvel..
console.log(marvel);// array can take any kind of entry data.
console.log("------------------------------------------------------");

console.log("value at last index of marvel=" ,marvel[4]);
console.log("------------------------------------------------------");

// concate():- combines two or more array and returns new array...
console.log("concate()");
const allheros=marvel.concat(dc);
console.log(allheros);
console.log("------------------------------------------------------");
//push():-pushes data in an array whereas concatenate returns new array.....



// there is one more easy method to add up the array...
// (spred method )here each element get spread and becomes an indiviual element (NOT AN ARRAY)

console.log("...spred...method");
const newarray1= [...marvel , ...dc];
console.log(newarray1);// in marvel we add dc therefore it treated as a indinvidual element as shown in o/p.
console.log("------------------------------------------------------");


//rare situtation...
const anotherarr =[1,2,3, [4,5,6] ,7 , [6 , 7 , [4 , 5]] ,8,];
console.log(anotherarr);
console.log("------------------------------------------------------");
//flat():-another array can be flated ...  in argument depth is pass if infinity pass then whole array flat.
console.log("flat()");
const realarr = anotherarr .flat(Infinity);
console.log(realarr);

//another way of spread...
const check = marvel.flat(Infinity);
console.log(check);

console.log("------------------------------------------------------");

//Array.isArray(){Array.is , Array.from , Array.of }

/* when accesing a data or select data from webpage then it comes in another form 
like node , list , object but we need array so in such situation use Array ..
we can check also weather it is array or not and also convert it also ..
*/

// EXAMPLE..............
console.log(Array.isArray("eshan"));

// FOR COVERTING IN ARRAY.......it can covert object , node , list etc into array
console.log(Array.from("tiwari"));

//interesting case for interview

console.log("interesting case=" , Array.from({name: "eshan"}));// it will empty array as it not coverting it directly...
// here we have to tell weather we want to make key as array or value as array,if it cant make then it give empty arr.


//covering multiple variable in array....

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1 ,score2 ,score3));

console.log("------------------------------------------------------");
