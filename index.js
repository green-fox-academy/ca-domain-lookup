/**
 * DOMAIN LOOKUP TOOL
 * 1) Frontend: search box, button, display result
 * 2) Backend: validate domain
 * 3)  - find method to test domain existence
 * 4) send it back to client
 */
const port = 3000;
const { exec } = require('child_process');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/check', (req, res) => {
    exec('nslookup 444.hu', (err, stdout, stderr) => {
        console.log(errorCheck(stderr));
    });
    res.sendFile(__dirname + '/index.html');
});

function errorCheck( errString ) {
    return ( errString.indexOf('Non-existent domain') == -1 );
}

app.listen(port, () => {
    console.log('App is listening on http://localhost:' + port );
});