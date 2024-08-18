function chai (){
    console.log(`DB CONNECTED`);

}
chai();

/*IMMEDIATELY INVOKE FUNCTION EXPRESSION (IIFE)
 ->GLOBAL scope se cheeze polute hote hai or wo polution 
 particular function ko effect na kere use liye IIFE likte hai

 -> global scope k polution ko hatata hai 

 ->function immediatly execute kerta hai (this line is not for interview)

*/
(function chai2 (){
    //named iife
    console.log(`DB CONNECTED`);
})();// function ko rap kiya parenthesis me or ececute


//firt ():- here function definition is writen
//second():- it for the execution call

// using arrow function 
( () => {
    //un named iife
    console.log(`DB CONNECTED ho gaya`);
})();//do iife sath me to semi colon lagao
// how we passs parameter
( (name) => {
    console.log(`DB COnect kero ${name}`);
})('eshan');



