// yolo
'use strict';

class App {
    constructor() {
        this.text = '';
    
        document.querySelector('button').addEventListener('click', event => {
            this.send(document.querySelector('input').value);
        })
    }

    send( domain ) {
        const data = { domain };
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/check');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = (e) => {
            this.ready(xhr.responseText)            
        }
        xhr.send( JSON.stringify(data) );
    }

    ready( response ) {
        console.log(response)
    }
}

const myApp = new App();