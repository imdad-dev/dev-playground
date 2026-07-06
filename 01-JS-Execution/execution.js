console.log("Start");

// Two callbacks with 0ms
setTimeout(function A() {
  console.log("Task A (0ms)");
}, 0);

setTimeout(function B() {
  console.log("Task B (0ms)");
}, 0);

// One with 1000ms
setTimeout(function C() {
  console.log("Task C (1000ms)");
}, 1000);

// One with 500ms
setTimeout(function D() {
  console.log("Task D (500ms)");
}, 500);

console.log("End");
