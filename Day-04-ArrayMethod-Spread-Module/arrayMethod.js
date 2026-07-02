//here only advaced array methods practice 

//   Count Users
// Students : 3

// Admins : 1
 

const users = [
    { role: "Student" },
    { role: "Admin" },
    { role: "Student" },
    { role: "Student" }
];

//using filter method to count the number of students and admins
//  const studentCount =users.filter(user =>user.role ==="Student").length;
//  const adminCount =users.filter(user => user.role ==="Admin").length;
//  console.log(`Students : ${studentCount}`);
// console.log(`Admins : ${adminCount}`);


// now using reduce method to count the number of students and admins
const countUsers = users.reduce((acc, user) => {
    if (user.role === "Student") {
        acc.students++; 
    } else if (user.role === "Admin") {
        acc.admins++;
    }   
    return acc;
}   
, { students: 0, admins: 0 });

console.log(countUsers);
console.log(`Students : ${countUsers.students}`);
console.log(`Admins : ${countUsers.admins}`);
