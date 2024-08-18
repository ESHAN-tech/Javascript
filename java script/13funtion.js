function saymyname(){
    console.log("R");
    console.log("A");
    console.log("M");
}
saymyname();

console.log("1 -----------------------------------")

function addtwonum( num1 , num2){
    //parameters:- passed in function definition
    console.log(num1+num2);
}

//function call
addtwonum( 5 , 46);//arguments:- passed in function call
addtwonum( 5 , "46");
addtwonum( 5 , "a");
addtwonum( 5 , null);

console.log("2 -----------------------------------");

function subtwonum (numa ,numb){

    let result =numa-numb;
    return result;
    console.log("eshan"); // return k baad function kaam ni karega so ye print ni hoga 
}
const result =subtwonum (10 ,5); // return wala function to koi variable me store to kerana padeaga na bidu
console.log("RESULT :" , result);

console.log("3-----------------------------------");

 function multwonum (numa1 ,numb2){
  
    return numa1 * numb2;
 }

 const result2 =multwonum (10 ,5);
 console.log("RESULT :" , result2);

 console.log("4 -----------------------------------")

 function loginUserMessage (username){
// can pass default value like username = "eshan" if any value pass in fun call then it overide default val
    if(username == undefined){// you can also write if(!username)
        console.log("please enter a username")
        return;
        //fir baki code ni chalega like return wala code na chale 
    }

    return `${username} just logged in `;

 }

 /*loginUserMessage ("harsh"); here function executed and the value is get retuned
 but don't said to that to fuction to print the value */

console.log( loginUserMessage ("harsh"));// here the value which is return get a print instruction.

// empty string -----------

console.log( loginUserMessage ("")); // just logged in print ------

//if no value is passed------------

console.log( loginUserMessage ()); // UNDEFINED comes when if condition is not used

console.log("5-----------------------------------")

function calculateCartPrice(num1){
    return num1;
}
console.log("output of first function call ")
console.log(calculateCartPrice(200 , 400 , 500));// there are certain many value in cart but it give first value

// to solve this problem use rest opertor or spread operator (...)-> sabko ek bundle me pack kerta h or de deta h


function calculateCartPrice2(...num2){//... in function it is rest operator 
    return num2;
}

console.log("fun call after using spread operator ")
console.log(calculateCartPrice2(200 , 400 , 500));//here we get the array,or array me loop laga k add kr do

function calculateCartPrice3(val1 , val2, ...num3){
    return num3;
}
console.log("third function call");
console.log(calculateCartPrice2(200 , 400 , 500 , 2000));// here val1 = 200 , val2 = 400 , and rest operator

console.log("6-----------------------------------");
// how to pass object in function and how does it usee .........

//...................object is created............................

const user = {
    username:"eshan",
    price: 199
}

//passin object in function call..........................

function handleObject(anyobject){
    console.log(` user name is ${anyobject.username} and price is ${anyobject.price}`);
}

//function call has done...................................
handleObject(user);

// don't need to create the object every time you can pass it as in function call
function handleObject2(anyobject){
    console.log(` user name is ${anyobject.user} and price is ${anyobject.rollnum}`);
}

//update the object in function call 
handleObject2({
    user:"sab",
    rollnum:31,
});
console.log("7-----------------------------------");
// how to pass ARRAY in function and how does it usee .........

//array created 
const mynewarr=[200 , 400 , 100 , 600];

//function call
function returnSecondValue(getArray){
    return getArray[1];
}
//return type hai to print kerwao ya koi ariable me daal k print kerwao
console.log( returnSecondValue(mynewarr));

// don't need to create the array every time you can pass it as in function call

function returnSecondValue2(getArray2){
    return getArray2[1];
}

console.log( returnSecondValue2([200 , 400 , 500 , 1000]));





















