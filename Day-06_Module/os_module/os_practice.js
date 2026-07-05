const os = require("os")



function formatBytes(bytes) {
  const gb = (bytes / (1024 ** 3)).toFixed(2); // convert to GB
  const mb = (bytes / (1024 ** 2)).toFixed(2); // convert to MB
  return { gb, mb };
}

console.log("======== Server Information ==========\n");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);

const total = formatBytes(os.totalmem());
const free = formatBytes(os.freemem());

console.log(`Total RAM: ${total.gb} GB (${total.mb} MB)`);
console.log(`Free RAM: ${free.gb} GB (${free.mb} MB)`);
