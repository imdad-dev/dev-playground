// const defaultConfig = {
//   host: "localhost",
//   port: 3000,
//   secure: false
// };

// const userConfig = {
//   port: 8080,
//   secure: true
// };


// // 👉 Task:  
// // Use the spread operator to merge them so that userConfig overrides defaultConfig.

//  const  mergConfig ={
//      ...defaultConfig ,
//      ...userConfig ,
// }

// console.log(mergConfig)




const reqBody = {
  username: "imdad",
  password: "12345",
  email: "imdad@example.com",
  role: "student"
};


// 👉 Task:

// Destructure username and password.

// Put the rest of the fields (email, role) into a variable called otherDetails using the rest operator. 

const {username , password ,  ...otherDetails} =reqBody;

console.log(username); // imdad
console.log(password); // 12345
console.log(otherDetails); // { email: "imdad@example.com", role: "student" }