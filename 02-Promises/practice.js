console.log("Start");

setTimeout(() => console.log("Task Queue → setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask Queue → Promise.then"));

// show Error , reject should be hanle by catch
Promise.reject().then(() => {
  console.log("Microtask Queue 2");
});

console.log("End");


// console.log("Start");

// setTimeout(taskQueueHandler, 0);

// Promise.resolve()
//   .then(firstMicrotask)
//   .then(secondMicrotask)
//   .then(thirdMicrotask)
//   .then(fourthMicrotask)
//   .then(fifthMicrotask)
//   .then(sixthMicrotask)
//   .then(seventhMicrotask);

// console.log("End");

// function taskQueueHandler() {
//   console.log("Task Queue → setTimeout");
// }

// function firstMicrotask() {
//   console.log("Microtask Queue → first");
// }
// function secondMicrotask() {
//   console.log("Microtask Queue → second");
// }
// function thirdMicrotask() {
//   console.log("Microtask Queue → third");
// }
// function fourthMicrotask() {
//   console.log("Microtask Queue → fourth");
// }
// function fifthMicrotask() {
//   console.log("Microtask Queue → fifth");
// }
// function sixthMicrotask() {
//   console.log("Microtask Queue → sixth");
// }
// function seventhMicrotask() {
//   console.log("Microtask Queue → seventh");
// }
