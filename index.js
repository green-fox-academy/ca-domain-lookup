/**
 * DOMAIN LOOKUP TOOL
 * 1) Frontend: search box, button, display result
 * 2) Backend: validate domain
 * 3)  - find method to test domain existence
 * 4) send it back to client
 * 5) Add this check on TLD-s: 
 * http://data.iana.org/TLD/tlds-alpha-by-domain.txt
 */
const port = 3000;
const { exec } = require('child_process');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/assets', express.static('./assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/check', (req, res) => {
    let command = 'nslookup ' + req.body.domain;
    exec( command, (err, stdout, stderr) => {
        const result = {
            domain: errorCheck(stderr)
        }
        res.json(result);
    });
});

function errorCheck( errString ) {
    return ( errString.indexOf('Non-existent domain') == -1 );
}

app.listen(port, () => {
    console.log('App is listening on http://localhost:' + port );
});