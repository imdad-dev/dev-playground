// async function User(userId){
//     return `Hello, User ${userId}! Welcome back!`;
// }

// console.log("Start of the program");
// console.log(User(42)); // This will log a Promise object`


// async function fetchData() {
//     return new Promise((resolve, reject) => {

//    // setTimeout wraps a  new promise bez setTimeout is not a promise-based function, it is a callback-based function. So we wrap it in a promise to use it with async/await.

//         setTimeout(() => {
//             const data = { message: "Data fetched successfully!" };
//             resolve(data);
//         }, 2000);
//     });
// }

// async function main() {
//     try {
//         console.log("Fetching data...");
//         const result = await fetchData();
//         console.log(result.message);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// main();

// const fetchData = async ()=>{

//     //  API call to fetch data from a public API (JSONPlaceholder) and return the JSON response
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const jsonData =await data.json();
//     return jsonData;
// }

// fetchData().then((data)=>{
//     console.log("Data type is: ", typeof data  );
//     console.log("User ID:" , data[2].userId);
//     console.log("ID:" , data[2].id);
//     console.log("Title:" , data[2].title);
//     console.log("Completed:" , data[2].completed);

// })
 

 // calling multiple APIs in parallel using Promise.all and async/await

 const fetchData = async  ()=>{

    const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos');
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');

    const [todosResponse, usersResponse] = await Promise.all([todosPromise, usersPromise]);

    const todosData = await todosResponse.json();
    const usersData = await usersResponse.json();

    return { todos: todosData, users: usersData };

 }

 fetchData().then((data)=>{
     try {

         console.log("Todos Data type is: ", typeof data.todos  );  // object --> array of objects
    console.log("Users Data type is: ", typeof data.users  );

     console.log("Total Todos:", data.todos.length);
    console.log("Total Users:", data.users.length);

    console.log("First Todo Title:" , data.todos[0].title);
    console.log("First User Name:" , data.users[0].name);   

    console.log("User Name of first Todo's User:", data.users.find(user => user.id === data.todos[0].userId).name);

    console.log("User Email of first Todo's User:", data.users.find(user => user.id === data.todos[0].userId).email);   

console.log("User Address of first Todo's User:", data.users.find(user => user.id === data.todos[0].userId).address);
console.log("User Address City and zipcode of first Todo's User:", data.users.find(user => user.id === data.todos[0].userId).address.city, data.users.find(user => user.id === data.todos[0].userId).address.zipcode);
    

     } catch(error){
        console.error("Error fetching data:", error);
     };
 })


