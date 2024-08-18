const coding =['js' , 'ruby' , 'java' , 'python' , 'c++'];

const values = coding.forEach((item) => {
    console.log(item);
})

console.log(values);
//as this function don't returns any value therefore in output we get undefined
// but in case of for each loop we always get undefined bcoz for each don't returns

// que retun only if java but in this case we don't prefer for each loop

const mynums =[1,2,3,4,5,6,7,8,9,10];
//filter be apne ander call back leta hai
const newnums =mynums.filter((num)=> num >4);// if scope not open then directly write num>4
const newnums2 =mynums.filter((num)=> {// here scope start 
    //if scope start then write the return key word

    return num >6

});
console.log(newnums);
console.log(newnums2);

const newarr=[];

mynums.forEach((num)=> {
    if(num>2){
        newarr.push(num)
    }
})

console.log(newarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books with genre 'History'
const userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);

console.log("---------------------------------------------");

// Filtering books published after 2000
const userBooks2 = books.filter((bk) => bk.publish >= 2000);
console.log(userBooks2);

console.log("----------------------------------------------");

// Filtering books of genre 'History' published after 1995
const userBooks3 = books.filter((bk) => {
    return bk.publish > 1995 && bk.genre === 'History';
});
console.log(userBooks3);

