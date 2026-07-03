// setTimeout(() => {
//     console.log("Hello after 0 second from setTimeout");
// }, 0);

// setImmediate( ()=>{
//     console.log("Hello from setImmediate");   
// })

// console.log("Hello from the bottom level code");  

// output : Hello from the bottom level code
 //         Hello after 0 second from setTimeout
 //        Hello from setImmediate

 // But why ?
//  setTimeout(() => {
//     console.log("Hello after 0 second from setTimeout");
// }, 0);

// setImmediate( ()=>{
//     console.log("Hello from setImmediate");   
// })

// setImmediate execute first why? answer is : its is non-deterministic, it depends on the event loop and the state of the call stack. In this case, setImmediate is executed before setTimeout because the event loop checks for immediate callbacks before checking for timers.



const  fs = require('fs');
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 6; // default is 4, we increase  6 threads --> randomness” is actually OS-level scheduling + parallel execution.

const start = Date.now();

setTimeout(() => {
    console.log("Hello  from setTimeout");
}, 0);

setImmediate( ()=>{
    console.log("Hello from setImmediate");   
})
fs.readFile("sample.txt" , "utf-8" , ()=>{
    console.log("Hello from io polling");

    setTimeout(() => {
        console.log("Hello from seTimeout 2");
    }, 0);  
    
    setImmediate( ()=>{
        console.log("Hello from setImmediate 2");   
    });
    
    crypto.pbkdf2("password1" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 1 done`);
    });

    crypto.pbkdf2("password2" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 2 done`);
    });

    crypto.pbkdf2("password3" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 3 done`);
    }); 
    crypto.pbkdf2("password4" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 4 done`);
    });
  

     crypto.pbkdf2("password5" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 5 done`);
    })

    crypto.pbkdf2("password6" , "salt" , 100000 , 1024 , "sha512" , ()=>{
        console.log (`${Date.now() - start} ms - Password 6 done`);
    })
})
console.log("Hello from the bottom level code");  