const mynum = [1, 2, 3, 4, 5, 6,7, 8,9 ,10];
//it automatically return the value
const newnum = mynum.map((num) => num + 10)

console.log(newnum);
console.log("-------------------------------------------");

// if we use scope then get undeined not empty array
const newnum2 = mynum.map((num) =>{ return num + 10})


console.log(newnum2);
console.log("-------------------------------------------");

// chaining method :- here we can use multiple method at a time
//like map lagaya fir dubara map lagaya fir filter laga diya


const newnum3=mynum
.map((num)=> num*10)
.map((num)=> num +1)
.filter((num)=>num>=40)

console.log(newnum3);

console.log("-------------------------------------------");

//reduce method.........................

const myn = [1,2,3];

const myt = myn.reduce(function (accumlator , currentval){
    console.log(`acc: ${accumlator} and currval: ${currentval}`);
    return accumlator + currentval;

})

console.log("-------------------------------------------");

const myt2 = myn.reduce(function (accumlator , currentval){
    console.log(`acc: ${accumlator} and currval: ${currentval}`);
    return accumlator + currentval;

},0)

console.log(myt2);


console.log("-------------------------------------------");

const myt3 = myn.reduce(function (accumlator , currentval){
    console.log(`acc: ${accumlator} and currval: ${currentval}`);
    return accumlator + currentval;

},3)


console.log(myt3);

console.log("-------------------------------------------");

