## Q1. What is the difference between Task Queue and Microtask Queue?
**Answer:**  
- **Task Queue (Macrotask):** Holds tasks like `setTimeout`, `setInterval`, DOM events, I/O. Executes after synchronous code and microtasks, one task per tick.  
- **Microtask Queue:** Holds microtasks like Promise `.then`, `.catch`, `.finally`, `queueMicrotask`. Executes immediately after synchronous code, drains fully before Task Queue.  

---

## Q2. How does Promise chaining work?
**Answer:**  
- Each `.then` returns a new Promise, enabling sequential async flow.  
- Errors propagate down the chain until caught with `.catch`.  
- `.finally` runs regardless of resolve or reject.  

---

## Q3. What is the starvation problem in the Event Loop?
**Answer:**  
- Starvation occurs when microtasks keep scheduling more microtasks endlessly.  
- Since the event loop drains all microtasks before moving to tasks, the Task Queue (timers, I/O, UI events) never executes.  
- Fix: yield back to Task Queue using `setTimeout` or `setImmediate`.  

---

## Q4. Why do microtasks have higher priority than tasks?
**Answer:**  
- ECMAScript spec requires draining microtasks before tasks.  
- Ensures predictable async behavior and efficient Promise chaining.  
- Prevents delays in resolving Promises compared to timers.  

---

## Q5. Example Output Order
```js
console.log("Start");

setTimeout(() => console.log("Task Queue → setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask Queue → Promise.then"));

console.log("End");
