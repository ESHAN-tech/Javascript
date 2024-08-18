//static part here we see in the code that copy is pass...
//EXAMPLE:- boolean , number , string , null , undefined , BigInt , symbol

let myname="eshan";
let anothername=myname;// here copy comes not an actual value that's why on printing my name we get eshan.
anothername="harsh";
console.log(anothername);
console.log(myname);

//heap memory:- here refrence comes example :- array , object , function...

let userone={
    email:"abc@gmail.com",
    upi:"13e13",

}
let usertwo= userone
/*
here on changing email  in usertwo , userone email also get change because
refrence variable pass(refrence variable wo hote jisme ek variable actual pass hota 
    hai with it actual location per static me us variable ki copy jate hai that's in heap 
    changes are reflect every where..)
*/

usertwo.email="eshan@gmail.com";
console.log(userone.email);
console.log(usertwo.email);




