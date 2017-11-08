/**
 * DOMAIN LOOKUP TOOL
 * 1) Frontend: search box, button, display result
 * 2) Backend: validate domain
 * 3)  - find method to test domain existence
 * 4) send it back to client
 */

const { exec } = require('child_process');
exec('nslookup 444.hu', (err, stdout, stderr) => {
  if (err) {
    console.error('Error',err);
  }
  console.log('Normal',stdout);
  console.log('Error',stderr);
});
