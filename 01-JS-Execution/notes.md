# 📘 JavaScript Execution & Event Loop

## 1️⃣ JavaScript Engine

The JavaScript Engine is responsible for executing JavaScript code.

### Responsibilities
- Parses JavaScript code.
- Compiles it into machine code.
- Executes the compiled code.

**Popular Engine**
- **V8** → Chrome & Node.js

---

## 2️⃣ Global Execution Context (GEC)

The Global Execution Context is created before any JavaScript code starts executing.

It has **two phases**:

### 🏗️ Creation Phase
- Memory is allocated.
- `var` variables are initialized with `undefined`.
- Function declarations are stored with their complete definitions.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.

### ▶️ Execution Phase
- Code executes line by line.
- Variables receive their actual values.
- Functions are invoked when called.

> Only **one Global Execution Context** exists during the program's lifetime.

---

## 3️⃣ Call Stack (LIFO)

The Call Stack manages function execution.

Every function call creates a **new stack frame**.

It follows the **LIFO (Last In, First Out)** principle.

---

## 4️⃣ Memory Heap

The Memory Heap stores reference-type data.

Examples:
- Objects
- Arrays
- Functions

---

## 5️⃣ Runtime APIs (Browser / Node.js)

JavaScript itself cannot perform asynchronous operations.

It relies on runtime-provided APIs.

### Browser Runtime
- setTimeout()
- setInterval()
- fetch()
- DOM Events

### Node.js Runtime
- Timers
- File System (fs)
- Network APIs
- libuv

These APIs execute asynchronous work outside the Call Stack.

---

## 6️⃣ Task Queue (Macrotask Queue)

When an asynchronous task finishes, its callback is placed into the **Task Queue**.

Characteristics:

- FIFO (First In, First Out)
- Waits until the Call Stack becomes empty

Examples:
- setTimeout
- setInterval
- DOM Events

---

## 7️⃣ Event Loop

The Event Loop continuously monitors the Call Stack.

### Workflow

1. Check whether the Call Stack is empty.
2. If empty, move the first callback from the Task Queue to the Call Stack.
3. Execute the callback.
4. Repeat.

### Execution Flow

```
JavaScript Code
        │
        ▼
Global Execution Context
        │
        ▼
Call Stack
        │
        ├──────────────┐
        ▼              │
Runtime web APIs       │
        │              │
        ▼              │
Task Queue             │
        │              │
        └────► Event Loop
                    │
                    ▼
               Call Stack
```

---

# 💡 Key Takeaways

- JavaScript is **single-threaded**.
- The **Call Stack** executes synchronous code.
- **Runtime APIs** handle asynchronous operations.
- Completed callbacks enter the **Task Queue**.
- The **Event Loop** moves callbacks to the Call Stack only when it is empty.
