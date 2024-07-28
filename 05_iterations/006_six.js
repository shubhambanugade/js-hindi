// const coding = ["js" , "ruby" , "py" , "java" , "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [ 1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]

// const newNums = myNums.filter( (num) => num > 4 )
// const newNums1 = myNums.filter( (num) => {           // scope open karne ke baad return keyword use karna padta hai
//     return num > 4} )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books =[
    {title : 'Book one' , genre : 'Fiction' , Piblish : 1981 , Edition : 2004},
    {title : 'Book two' , genre : 'Non-Fiction' , Piblish : 1992 , Edition : 2008},
    {title : 'Book three' , genre : 'History' , Piblish : 1999 , Edition : 2007},
    {title : 'Book four' , genre : 'Non-Fiction' , Piblish : 1989 , Edition : 2010},
    {title : 'Book five' , genre : 'Science' , Piblish : 2009 , Edition : 2014},
    {title : 'Book six' , genre : 'Fiction' , Piblish : 1987 , Edition : 2010},
    {title : 'Book seven' , genre : 'History' , Piblish : 1986 , Edition : 2016},
    {title : 'Book eaight' , genre : 'Science' , Piblish : 2011 , Edition : 2017},
    {title : 'Book nine' , genre : 'Non-Fiction' , Piblish : 1999 , Edition : 2022},
    {title : 'Book ten' , genre : 'History' , Piblish : 2011 , Edition : 2023},
];

let userBooks = books.filter( (Book) => Book.genre === 'History' )

 userBooks = books.filter( (Book) => {
     return Book.Piblish >= 1995 && Book.genre === 'History'
    } )                                                 // scope open hai isliye return keyword use kiya hai

console.log(userBooks);