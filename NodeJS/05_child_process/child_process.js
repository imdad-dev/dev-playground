const { exec , spawn  , execFile ,fork } = require("child_process");


// ===exec =======//
// exec("git status ", (error, stdout, stderr) => {
//   if (error) {
//     console.error("Exec Error:", error.message);
//     return;
//   }
//   if (stderr) {
//     console.error("Exec Stderr:", stderr);
//     return;
//   }
//   console.log("Exec Output:", stdout); // Example: v20.11.0
// });


// spawn(command, [args]);

// const list =
//   process.platform === "win32"
//     ? spawn("cmd.exe", ["/c", "dir"]) // Windows
//     : spawn("ls", ["-lh"]);           // Linux/Mac

// list.stdout.on("data", (data) => {
//   console.log(`Spawn Output:\n${data}`);
// });

// list.stderr.on("data", (data) => {
//   console.error(`Spawn Error:\n${data}`);
// });

// list.on("close", (code) => {
//   console.log(`Spawn exited with code ${code}`);
// });


// Run Python script
// execFile("python", ["test.py"], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`ExecFile Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`ExecFile Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`ExecFile Output:\n${stdout}`);
// });



//========= Fork a child process to run child.js  ======//
const child = fork("child.js");

// Send a message to the child
child.send({ msg: "Hello Child!" });

// Listen for messages from the child
child.on("message", (data) => {
  console.log("Message from child:", data);
});

// Handle exit
child.on("exit", (code) => {
  console.log(`Child exited with code ${code}`);
});