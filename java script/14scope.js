let a = 10;
const b = 20; 
var c = 30;

console.log("line 1 --------------------------------------")
//global scoped variable 
console.log(a);
console.log(b);
console.log(c);


//{} = SCOPE


if(true){

    let d = 40;
    const e = 50; 
    var f = 60;
// these variables are valid within the scope and access within this scope

}


console.log("line 2 --------------------------------------");

//console.log(d); // o/p comes as not defined ERROR
//console.log(e);//ERROR :- cannot access out side the scope 
console.log("var wala variable " , f); // problem :- but this can be printed 

/* If all variable are working properly then what need to brought the 
const var  it brought bcoz they not work as block*/ 

var f= 500;//global scope

if(true){// block scope
   
    var f = 30;// value of is changed 

}

console.log("dusra var wala variable" , f);
// if here let is used then this problem not occurs

console.log("line 3 ----------------------------------------")

let g= 500;//global scope

if(true){// block scope   
    let g = 65;
}
console.log(g);

/*

brower inspect scope is different and 
in code environment with node js is different

 */

//nested scope:- here child function can access parent function
console.log("nested function")
function one(){// here one is greater 
    const username = "eshan"

    function two(){ // here two can use the one variables 
        const website = "youtube"
        console.log(username);


    }

    //console.log(website);(error occur ) jobe varaibale two k ander declare huai hai wo wahi katum ho gaye hai 
    two();//function call
}
one();//function call

if (true){
    const name ="harsh";
    if(name == "harsh")
    {
        const website = "youtube";
        console.log(name + website);

    }
   // console.log(website);(error as it use out of scope)

}
//console.log(name);(error as it use out of scope)

//++++++++++++ intresting +++++++++++++++++++++

console.log("------------------------------------");
console.log(addone(5));// no error on call before function decleration
function addone (num){
    return num +1;
}


//another way of declaring the function 

//console.log(addtwo(5)): here error comes bcoz here we hold the function in variable 
const addtwo= function(num){
    return num +2;
}
console.log(addtwo(5));











