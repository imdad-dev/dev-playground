# 📘 Event‑Driven Programming (EDP)

## Q1. What is Event‑Driven Programming?
Event‑Driven Programming is a paradigm where program execution is triggered by **events** (e.g., button click, message received, file saved).  
- Components **emit events** when something happens.  
- Other components **listen** and react.  
- The emitter does not know who is listening → promotes flexibility.

---

## Q2. Why is Node.js event‑driven?
Node.js uses an **event loop** and **callbacks**.  
- Asynchronous operations register callbacks.  
- When complete, the event loop invokes them.  
- Enables handling of **many concurrent I/O operations efficiently**.

---

## Q3. Main components of an event‑driven system
- **Event**  
- **Producer (Emitter)**  
- **Consumer (Listener)**  

---

## Q4. Advantages
- Loose coupling  
- Scalability  
- Easier to extend  
- Multiple independent reactions to the same event  

---

## Q5. Real‑world backend example
User registration system:  
- Emit `userRegistered` event.  
- Listeners: send welcome email, generate JWT, log activity, update analytics.  
- Registration logic remains clean and independent.

---

# 🏗️ Event‑Driven Architecture (EDA)

## Q1. What is Event‑Driven Architecture?
A software architecture where components communicate by **producing and consuming events** instead of direct calls.  
- Promotes **loose coupling**, **scalability**, and **extensibility**.

---

## Q2. Main components
- **Producer**  
- **Event**  
- **Consumer**  
- **Event Bus** (common in distributed systems)

---

## Q3. Tight Coupling vs Loose Coupling

| Aspect       | Tight Coupling                        | Loose Coupling                          |
|--------------|---------------------------------------|-----------------------------------------|
| Dependency   | Components directly depend on each other | Components communicate via events        |
| Flexibility  | Hard to change or extend              | Easy to add/remove consumers             |
| Maintenance  | Changes ripple across system          | Changes isolated to consumers            |
| Example      | Function A calls Function B directly  | Function A emits event, listeners react  |

---

## Q4. Real‑world example
E‑commerce application:  
- Emit `orderCreated` event.  
- Services listening: inventory, email, invoice, analytics.  
- Each acts independently without modifying the order service.

---

## Q5. Advantages
- Loose coupling  
- Better scalability  
- Easier maintenance  
- Easy to add new features (new consumers)  
- Supports asynchronous processing  

---

## Q6. Challenges
- Debugging is harder  
- Event ordering issues  
- Error handling across multiple consumers  
- Complexity in distributed systems  

---

# 🔑 EDP vs EDA

| Feature   | Event‑Driven Programming (EDP) | Event‑Driven Architecture (EDA) |
|-----------|--------------------------------|---------------------------------|
| Scope     | Code‑level paradigm            | System‑level architecture       |
| Focus     | How a single program reacts to events | How multiple services communicate via events |
| Example   | Node.js `EventEmitter`         | Kafka, RabbitMQ, microservices event bus |
| Coupling  | Loose coupling within a program | Loose coupling across distributed systems |

---

👉 **EDP = coding style**  
👉 **EDA = system design philosophy**
