//fetch('abc.com').then().catch().finally()
/*
then():- if response are coming then it will give the reponse 
catch():- if erroe ocurs then it point or show that error 
finally():- batyega result ayaa ki nahi ayaya ki erroe aya

when there is no promise at that time Q or BlueBird lib is 
used for then , catch and finally
*/


// creating the promise 
//new is used to create a new instant 

const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("promise1");
      resolve()
    },1000)
})

// uppar walla chal rHa hai but niche walaa not running so for that resolve is used 

promise1.then(function(){
    console.log('consume');
})

//METHOD2 
new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("promise1");
      resolve()
    },1000)}).then(function(){
        console.log(
            "consume 2"
        );
    })

//method 3
//resolve is directly conected with then 
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise1");
        resolve({username:"Ankit" , password:"6235"})
      },1000)

     
      })
    
promise3.then(function(user){
    console.log(user);

  })
