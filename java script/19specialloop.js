// for of

["" , "" ,""];// array k ander bhut se string 
[ {} , {} , {}] ;// array k ander bhut se object 
/* 
her iteration me object se koi value nikalne hai like in this case 
for of loop are much better

*/

const arr = [ 1, 2, 3, 4, 5 ];

for(const num of arr){

    console.log(num);

}

const greeting = "hello world";
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}


// ....... M A P ........
// map is the object that hold an key value pair , THEY ARE UNIQUE

const map = new Map();
map.set ('IN' , " India " );
map.set ('USA' , " United state of america " );
map.set ('FR' , "france" );
map.set ('IN' , "India" );//it will not repeat as map are unique 

console.log(map);

//using for of loop in map 

 for (const key of map ){
    console.log(key);//in output we get array but we don't want this 
 }

// to avoid above problem

 for (const [key2,value] of map ){
    console.log(key2,"=" ,value);
 }

 // can we use for loop on object ?

 const myobj ={
    "game 1":"bgmi",
    "game 2":"cod",
    "game 3":"spiderman",
 }
//for(const [key3 , value3] of myobj){
   // console.log(key3 , ' :- ' ,value3 );//this object is not iterable 
// so here we use for in loop}

const myobj2 = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

//for in loop

for (const key4 in myobj2){
    console.log(key4);
    console.log(myobj2[key4]);
    console.log(`${key4} shortcut is for ${myobj2[key4]}`)
}

//using for in loop in array

const programming = ['js' , 'rb' , 'py' , 'java' , 'cpp' ];

for (const k in programming){
    console.log(k);
    console.log(programming[k]);// geting value from key kkjk
}
/*
array ki key num he hote hai  joki 0 se start hote hai 
*/

// can we use for in loop in map 

for (const key in map){
    console.log(key);// not iterable
}

console.log("--------------------------------------------");
// for each loop

const coding = ['js' , 'python' , 'java' , 'ruby' , 'cpp' ] ;

//for (const key in coding){}
// function ander declare hoga without name
coding.forEach( function (item) {
    console.log(item);
})
console.log("--------------------------------------------");
//USING ARRAY FUNCTION 

coding.forEach( (val) => {
    console.log(val);

})

console.log("--------------------------------------------")
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item , index , arr)  => {
    console.log(item , index , arr);

})

const mycoding = [
    {
        lang:"js",
        file:"java"
    },
    {
        lang:"js",
        file:"java"
    },
    {
        lang:"python",
        file:"py"
    },


]

mycoding.forEach((item) => {
    console.log(item.file);
})
