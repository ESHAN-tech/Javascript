//here dicuss how onject singleton and by constructor.......

const tinderUser = new Object();// singleton object , o/p = {}
const tinderuser2 = {} ;// non singleton object , o/p = {}

tinderuser2.id ="123abc";
tinderuser2.name = "sammy",
tinderuser2.isLoggedIn = false;


console.log(tinderuser2);
console.log("------------------------------------------------------");
//object k ander object . . . . . .

const regularuser = {
    email: "harsh123@gmail.com",
    fullname :{
        userfullname:{
            firstname : "e s h a n",
            lastname : "t i w a r i"

        }
    }
}

console.log(regularuser);
console.log("------------------------------------------------------");
console.log(regularuser.fullname);// opening the nesting...............
console.log("------------------------------------------------------");
console.log(regularuser.fullname.userfullname.firstname);// opening more nesting.
console.log("------------------------------------------------------");
//if fullname is not exist and we try to access it then in that case we use (?).
// ? ternary operator ...

console.log("2nd",regularuser.fullname?.userfullname.firstname);

console.log("------------------------------------------------------");
// combine two different object....

const obj1 = { 1: "a" , 2: "b"};
const obj2 = { 3: "a" , 4: "b"};

const obj3 = { obj1 , obj2}; //prblm:- object k under he object ho jayega

const obj4 = Object.assign({} ,obj1 , obj2);//(target , source)
/*{} -> ye target h jisme sare source ko merge ker diya jata hai yeah starting me 
emty lete hai taki ager multiple array ho to merge ker de 
ager obj1 lenge starting me to obj1 me he sare value daal k return ker dega*/
//obj1 & obj3 => source...

console.log("for obj3 = " , obj3);
console.log("------------------------------------------------------");
console.log("for obj4 = " , obj4);
console.log("------------------------------------------------------");

// IN GENERAL WE USE SPREAD OPERATOR .....
const obj6= { 7: "a", 8: "b" };
const obj7= { 9: "a", 10: "b" };

// Merging objects using spread operator
const obj5 = { ...obj1, ...obj2 };
console.log("obj3 by spread method = " ,obj3);
console.log("------------------------------------------------------");

// this way the value comes from the database then they comes in array form.
//A R R A Y    O B J E C T 
const user =[
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {

    },
]

user[1].email
console.log(user);
console.log("------------------------------------------------------");

console.log(tinderuser2);
console.log("------------------------------------------------------");
// accessing keys 
console.log(Object.keys(tinderuser2));//o/p datatype is array taking all o/p and put it into the array
console.log("------------------------------------------------------");

console.log(Object.values(tinderuser2));
console.log("------------------------------------------------------");

console.log(Object.entries(tinderuser2));
console.log("------------------------------------------------------");

/* some time loop through the object for any value retrival
some time value may not exist due to which crash chance may occurrs
so u ask it either that value is present or not  */

console.log(tinderuser2.hasOwnProperty('isLoggedIn '));