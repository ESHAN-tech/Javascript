//loop is also called iteration.........
console.log("FOR LOOP");


for(let index = 0 ; index <10; index++)
{
    const element = index;
    console.log(element);
    
}

console.log("----------------------------------------------");

for(let i =0; i<=10 ; i++)
{
   // console.log(`outer loop value : ${i}`);

    for(let j=0 ;j<=10 ; j++)
    {
        //console.log(`inner loop value:${j}`);
        //console.log(i+ '*' + j + '=' + i*j); print table form 1 to 10 
    }
}

console.log("----------------------------------------------");

let myarray =[ 'flash' , 'batman', 'superman'];

for(let index =0 ; index < myarray.length ; index++){
    const element = myarray[index];
    console.log(element);
    console.log(myarray.length);
}

console.log("----------------------------------------------");

console.log("break & continue ")
// BREAK 

for (let index = 1 ; index<=10 ; index++){
    if(index == 5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}

console.log("----------------------------------------------");

//CONTINUE :- EK MAR MAAF KER DO OR IGNORED OR SKIPED

for (let index = 1 ; index<=10 ; index++){

    if(index == 5)
    {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`value of i is ${index}`);
}

console.log("----------------------------------------------");

console.log("while loop");
//WHILE LOOP..........

let index = 0;
while(index <= 10 ){
    console.log(`value of index is ${index}`);
    index = index +2;
}

//by ARRAY


let myarr =[ 'flash' , 'batman', 'superman'];
let i = 0;
while (i < myarr.length){
    console.log(`value is ${myarr[i]}`);
    i=i+1;

}

console.log("----------------------------------------------");

console.log("do while loop");

//do while 

let score = 1;

do {
    console.log(`score is ${score}`);
    score++;

}while(score<=10);

console.log("----------------------------------------------");
