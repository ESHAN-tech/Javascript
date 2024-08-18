let str1="eshan";
let str2=" tiwari";

//concatenation...

let str3=str1 + str2;
console.log(str3);

console.log("--------------------------------------------------");

console.log("1" + 2);//12 , here treat string first... 
console.log(1 + "2");//12 , first treat int then string...
console.log("1" + 2+2);// here 122 comes in out put bcoz first is string so it will treat as string and it will con catenates.
//1 concatenate 2 =12 & 12 concatenate with 2 = 122...;
console.log(1 + 2 + "2") // 1+2=3 & "2"=2 ,output= 32 ,bcoz here first is int so(1+2) concatenate 2

console.log("--------------------------------------------------");
//some coversion ,but don't practice it's just for knowlege..

console.log(true);
console.log(+true);//convert boolean to number...(hack)
//console.log(true+); ERROR...
console.log(+"");// in boolean emplty (empty stands for false) coversion is 0...

console.log("--------------------------------------------------");

//not a good practice... like ek sath sabko define kerna 
let num1 ,num2 ,num3;
num1=num2=num3==2+2;
console.log(num1);//false
console.log(num2);//false
console.log(num3);//undefined

let num1a, num2b, num3c;
num3c = 2 + 2;
num1a = num2b = num3c;
console.log(num1a); // 4
console.log(num2b); // 4
console.log(num3c); // 4

console.log("--------------------------------------------------");

//postfix....
let gamecounter=100;
console.log("before postfix =",gamecounter , ";");
gamecounter++;
console.log("after postfix =",gamecounter,";");

//prefix....
let gamecounter1=100;
console.log("before prefix =",gamecounter1, ";");
++gamecounter1;
console.log("after postfix =",gamecounter1, ";");

console.log("--------------------------------------------------");

//comparision of opertaor 
console.log(2>1);
console.log(2>=2);
console.log(2<1);
console.log(2!=1);

console.log("--------------------------------------------------");

//problem statements
console.log("2" >1 );// it automaticall convert or assume sting 2 as number 2 , NO STRICT CHECKING...
console.log("02" > 1);

console.log("--------------------------------------------------");
// for null value
console.log( null > 0);
// due to equal operator null is coverted to 0 that's ture comes >= comparision...
console.log( null == 0);

console.log( null >= 0);

//problem :- null can be converted into the zero...

console.log("--------------------------------------------------");

//for undefined value... it will be false for all...
console.log( undefined > 0 );

console.log( undefined == 0 );

console.log( undefined >= 0 );

console.log("--------------------------------------------------");

//strict check.. vs normal check...
console.log( "2" === 2 );// 2 is string so it will strictly check 

//without strict check...
console.log( "2" == 2 );




