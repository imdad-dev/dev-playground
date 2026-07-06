// 👉 Task: Extract username and content-type into variables using destructuring.
const UserReq = {
  body: { username: "imdad", password: "12345" },
  headers: { "content-type": "application/json" }
};
 
const { body : {username } , headers :{ "content-type": contentType }} = UserReq;

console.log(username); // imdad
console.log(contentType); // application/json   


// 👉 Task: Use array destructuring to get the first two rows (Alice, Bob) into variables.
// const rows = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
 
// const [row1 , row2] =rows;
// console.log(row1);
// console.log(row2);

// 👉 Task: Destructure status with a default value "pending".
// const response = { data: "OK" };

// const {status ="pending" } = response;

// console.log(status); // pending

// // 👉 Task: Extract city and pin directly using nested destructuring.

// const user = {
//   id: 101,
//   profile: {
//     name: "Imdadul",
//     address: { city: "Silchar", pin: 788001 }
//   }
// };
 
// const {profile : {address : {city , pin}}} =user;
// console.log(city); // Silchar
// console.log(pin); // 788001 

// 👉 Task:

// Extract name and email directly.

// Get "x-api-key" into a variable called apiKey.



const req = {
  body: {
    user: {
      profile: {
        name: "Imdadul",
        contact: { email: "imdad@example.com" }
      }
    }
  },
  headers: {
    "x-api-key": "abc123"
  }
};
 

const {body : { user :{ profile : { contact : {email}}}} , headers : {"x-api-key" : apiKey} }= req;

console.log(email); // imdad@example.com
console.log(apiKey); // abc123

// without destructuring

console.log(req.body.user.profile.contact.email); //    
console.log(req.headers["x-api-key"]); // abc123
console.log(req.body.user.profile); 