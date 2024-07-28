const coding = [ "js" , "python" , "java" , "cpp" , "rb"]

// coding.forEach(function (item) {
//     console.log(item);
// } )

// coding.forEach( (item)=> {
//     console.log(item);
// } )

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languagename : "javascript" , 
        languageFileInfo : "js"
    },
    {
        languagename : "python" , 
        languageFileInfo : "py"
    },
    {
        languagename : "java" , 
        languageFileInfo : "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
} )