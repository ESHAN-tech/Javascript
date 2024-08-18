const arr = [0,1,2,3,4,5];
console.log(arr);
const arr2 = ['a',1 ,'b', 2 ,'c' ,3];
console.log(arr2);
// result :- array  supprot both numeric and string character 

//new way to declare array
// array give shallow copy . shallow :-refrence & deep pass copy


const arr3 =new Array(5,8,6,9,7);
console.log(arr3);

console.log("-----------------------------------------------------------");
// methods of array....
console.log("methods of array");

// push() method ... it will add element at last index..
console.log("push");
 arr.push(6);
 console.log (arr);
 console.log("-----------------------------------------------------------");

 //pop() :- remove last element of array...
 console.log("pop");
 arr.pop();// don't pass any element or index..
 console.log(arr);// here it removes the 6 th value 

 arr.pop(3);// it ignore the parameter.
 console.log(arr); // del the last value of array which is 5.
 console.log("-----------------------------------------------------------");

 // unshift():- this method adds value in starting index of array....
 /*
unshift is not good practice each element has to
be when element added to starting index then each element has to be shift 1 step 
from there place by which load comes on computer , time increases if the size 
of array is greater like 10000
*/
console.log("unshift");
  arr.unshift(9);// 9 added starting index
  console.log(arr);
  console.log("-----------------------------------------------------------");
  console.log("shift");
  // shift() method :- IT removes the starting index value .No argument is passed.
  arr.shift();// removed 9 
  console.log(arr);
  console.log("-----------------------------------------------------------");

  // include ():- used to check weather the particular element present in array or not .
  console.log("include");
  console.log(arr.includes(9));//boolean ans comes 
  console.log("-----------------------------------------------------------");

  //indexOf():- used to index of particular element ..
  console.log("indexOf")
  console.log(arr.indexOf(9));// if element not found then it return -1 index 
  console.log(arr.indexOf(3));
  console.log("-----------------------------------------------------------");

  // join():-adding all the element of array into a string ...
  console.log("join")
  const newarry = arr.join();
  console.log(newarry);
  console.log(typeof(newarry));// it bind the array and coverted into the string ...
  console.log("-----------------------------------------------------------");

  // slice ();- return a copy of a section of an array..
  console.log("slice")
  
  console.log("original array before splice and slice method =" , arr);


  const myarr = arr.slice(1,3);// 3 is not included ....
  console.log("original array on using slice=" , arr);
  console.log(myarr);
  console.log("-----------------------------------------------------------");

//splice ():- takes out the value from array... as shown in output ...
console.log("splice")
  const myarr2 = arr.splice(1,3);// 3 is included ....
  console.log("original array on using splice=" , arr);
  console.log(myarr2);

  /* what is the difference between slice and splice....
  slice :- don't manipulate original array
        :- don't include last index..

  splice:- monipulate original array gives output by out the range of element from the array..
        :- include the last index also..
*/
console.log("-----------------------------------------------------------");





