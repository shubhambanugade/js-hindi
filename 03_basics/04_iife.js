// Immediately Invoked Function Expressions (IIFE)


(function chai(){       // name IIFE
    console.log(` DB CONNECTED`);
})();

( (name) => {             // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('shubham')