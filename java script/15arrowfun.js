const user = {
    username: "hitesh",
    price: 999 ,

    welcomeMessage : function(){
        // { username}:- here we can't directly pass it over here ,insted of that use this key word 
        console.log(`${this.username} , welcome to website`);
        // in arrow function no this key word is present 
        console.log("--------------------------------------");
        console.log("gives the current context");
        console.log(this);//gives the current context 
    }

}// comes out from the object 

console.log("line 1 --------------------------------------");

//jab ye below command lik raahe hai tabhi ye sab output a raha hai

user.welcomeMessage();
console.log("function call after object is update");
user.username = "sam";
user.welcomeMessage();

// if  we  here  prit  the  current  context  in  node  environment  then
// this  key  word  refers  to  empty  object ,  abhi  global  me  koi  context  he  ni  h

console.log("here this key word is used ");
console.log(this);

console.log("line 2 --------------------------------------");
console.log("chai()");
function chai()
{
    console.log(this);
}
console.log("------------------------------");
//chai();
console.log("chai2()");
function chai2(){
    let username = "harsh2"
    console.log(this.username);

}

chai2();// output is undefined , here we can see that this is works under the function 
console.log("------------------------------");
console.log("chai3()");
const chai3 = ()=> {
    let username = "harsh3"
    console.log(this);

}

chai3();
console.log("------------------------------");
/* what is difference between normal function and arrow function 
 */

//+++++++++++++++++++++ARROW Function+++++++++++++++++++++++++++

const addTwo = (num1 , num2 )=>
{
    return num1 + num2 ;
}

console.log(addTwo(3 , 4));



// emplicit return :- return key word likne ki jarurat ni h bcoz ek he line ka statement h
//const mulTwo = (num1 , num2 ) =>  num1 * num2 ; this also work
// '{' curly braket likha mtlb ki return use kerna hai or agr "(" parenthesis likha to ni krna

const mulTwo = (num1 , num2 ) => ( num1 * num2);

const obj =() => ( { username:"eshan",});

console.log(mulTwo(3 , 4));

console.log(obj());
