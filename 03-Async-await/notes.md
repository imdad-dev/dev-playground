# 🚀 Async/Await  Questions Cheat Sheet

---

## 1. How do you call an API using async/await?

### Answer

Use `fetch()` (or Axios) inside an `async` function and `await` the response. Handle errors with `try...catch`.

```js
async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log("User:", data.name);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser();
```

### 💡 Interview Tip

Always mention that production code should handle errors using `try...catch`.

---

## 2. How do you call multiple APIs at the same time?

### Answer

Use `Promise.all()` to execute multiple asynchronous operations in parallel.

```js
async function getUserAndPosts() {
  try {
    const [userRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
    ]);

    const [user, posts] = await Promise.all([
      userRes.json(),
      postsRes.json(),
    ]);

    console.log(user.name);
    console.log(posts.length);
  } catch (error) {
    console.error(error.message);
  }
}

getUserAndPosts();
```

### 💼 Backend Use Case

Fetch data from multiple microservices (e.g., User Service + Post Service) simultaneously to reduce response time.

---

## 3. Explain Promise.all()

### Answer

- Runs multiple Promises in parallel.
- Resolves only when all Promises succeed.
- Rejects immediately if any Promise fails (**Fail Fast**).

```js
async function demoAll() {
  const p1 = Promise.resolve("A");
  const p2 = Promise.resolve("B");
  const p3 = Promise.resolve("C");

  const result = await Promise.all([p1, p2, p3]);

  console.log(result);
}

demoAll();
```

**Output**

```text
["A", "B", "C"]
```

### 💡 Interview Tip

Remember the phrase:

> **Promise.all() is Fail Fast.**

---

## 4. Explain Promise.race()

### Answer

Returns the first Promise that settles (either resolves or rejects).

```js
async function demoRace() {
  const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("Fast"), 500)
  );

  const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("Slow"), 1000)
  );

  const result = await Promise.race([p1, p2]);

  console.log(result);
}

demoRace();
```

**Output**

```text
Fast
```

### 💼 Backend Use Case

Useful for:
- API timeout handling
- Fastest server selection
- Multiple service requests

---

## 5. How do you implement API Timeout?

### Answer

Combine `Promise.race()` with a timeout Promise.

```js
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    ),
  ]);
}

async function getData() {
  try {
    const response = await withTimeout(
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      1000
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
```

### 💼 Backend Use Case

Timeouts prevent APIs from waiting indefinitely for slow or unresponsive services, improving reliability.

---

# ⭐ Quick Revision

| Question | Answer |
|----------|--------|
| API call | `await fetch()` |
| Multiple APIs | `Promise.all()` |
| Fastest Promise | `Promise.race()` |
| Timeout | `Promise.race()` + Timeout Promise |
| Error Handling | `try...catch` |
| Promise.all() | Fail Fast |