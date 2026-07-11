// Listen for messages from the parent
process.on("message", (data) => {
  console.log("Message from parent:", data);

  // Send a reply back
  process.send({ msg: "Hello Parent!" });
});

// Optional: exit after some time
setTimeout(() => {
  process.exit(0);
}, 2000);
