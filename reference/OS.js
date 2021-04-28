const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Mem
var freemem = (os.freemem() / 1073741824);
freemem = freemem.toFixed(2);
console.log(freemem + ' GBs');
// total is totalmem

// Home dir

console.log(os.homedir());

// Uptimeeeee
var uptime = os.uptime();
uptime = os.uptime / 60 / 60
console.log(uptime + ' hours');

