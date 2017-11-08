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
            this.ready( JSON.parse( xhr.responseText) ); 
        }
        xhr.send( JSON.stringify(data) );
    }

    ready( response ) {
        const targetNode = document.querySelector('article');
        if( response.domain ) {
            targetNode.textContent = 'Domain exists';
            targetNode.setAttribute('class','err');
        } else {
            targetNode.textContent = 'Nope, go buy it!';
            targetNode.setAttribute('class','ok');
        }
    }
}

const myApp = new App();