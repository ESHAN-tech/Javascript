// singleton 
/* it is created by the constructor
jab literal se declare karte hai tab ni 
bunta haai 
 */

//object literal

const jsuserdemo = {};//LITERAL

// another of creating object is
console.log("------------------------------------------------------");

Object.create// it is made through constructor also called singleton
// its notes is in dairy.

const jsuser = {
    name: "eshan",
    age :15,// already consider as no.
    location: "barabanki",
    email: "eshan123@gmail.com",
    isloggedIn:false,
    lastLoginDays:["monday" , "saturday"],//array(mutiple value in a single var)
}

/* here name is treated as string "name"
if write name as "name" then u can't use (.) operator
they are with square notation */

// access of object....................

console.log(jsuser);
console.log(jsuser.email);// not a good way to access
//console.log(jsuser[email]), here error comes bcoz email is treated as string(string ki terha rakha ja raha) so it access through string
console.log(jsuser["email"]);//you can acces throug square notation(good way of accessing )
console.log("------------------------------------------------------");

const jsuser2={
     name:"harsh",
    "full name":"eshan tiwari",
}
// now we cant acces this value with dot 
//console.log(jsuser2.full name);that's why dot is not good way to access obj
console.log(jsuser2["full name"]);

//Q1) take symbol key in obj and print it...
/* we cant use symbol directly as key in object  */

console.log("------------------------------------------------------");

const mysyn = Symbol("mykey1")
const jsuser3 = {
    name: "eshan",
    age :15,// already consider as no.
    //mysym:"mykey1",// accessing symbol as key in obj , TO USE IT AS SYMBOL WRITE IT UNDER SQUARE BRACKET
    [mysyn]:"mykey1",// symbol declare in object...
    location: "barabanki",
    email: "eshan123@gmail.com",
    isloggedIn:false,
    lastLoginDays:["monday" , "saturday"]
}

//console.log(jsuser3.mysym); for accessing it use it with square notation
//console.log(typeof(jsuser3.mysym));// here you can see that symbol is behaves as string ,not uses as symbol

console.log(jsuser3[mysyn]); 
//freeze (f : Function):
/*object on which to lock the attributes from the modifications */
console.log("freeze");

Object.freeze(jsuser3);

jsuser3.email="harsh123@gmail.com";  //this value  will not propagate as it frezess before  
console.log(jsuser3);  // here in output it show [mysyn] as symbol not string...

console.log("------------------------------------------------------");

//FUNCTION....................................................................
console.log("FUNCTION");

jsuser.greeting = function(){

    console.log('hello js user');

}

// accessing greeting in jsuser3

console.log(jsuser.greeting);  //[Function (anonymous)] comes which means function not executed just its reference comes
console.log(jsuser.greeting());

// making another function , making refrence as name..........................

console.log("------------------------------------------------------");

//FUNCTION :- (2) ............................................................
console.log("FUNCTION-2");
jsuser.greetingtwo = function(){

    console.log(`hello js user, ${this.name} `);

}

console.log(jsuser.greetingtwo);
console.log(jsuser.greetingtwo());
/* NOTE:-
acces the key of obj through dot (.) operator 
but we can acces with square notation
there are some special condition where we need to use the square notation
like case of symbol */