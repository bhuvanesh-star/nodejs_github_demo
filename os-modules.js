const os = require('os');

const currentOS={
 name:os.type(),
 release:os.release(),
 freeMem:os.freemem(),
 totalMem:os.totalmem()
}

console.log(currentOS)