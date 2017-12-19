var focusable = require('../index.js');

var listEl = document.getElementById('list');
var appender1 = document.getElementById('appender1');
var appender2 = document.getElementById('appender2');
var appender3 = document.getElementById('appender3');
var output = document.getElementById('output');

function onButtonClick(e) {
    e.preventDefault();

    var listItem = document.createElement('li');
    var focusableEls;

    if (e.target.id === 'appender1') {
        listItem.setAttribute('tabindex', '0');
    } else if (e.target.id === 'appender2') {
        listItem.setAttribute('tabindex', '-1');
    } else {
        listItem.setAttribute('tabindex', '0');
        listItem.setAttribute('hidden', 'hidden');
    }

    listItem.innerText = 'Item ' + (listEl.childNodes.length);
    listEl.appendChild(listItem);

    focusableEls = focusable(listEl);
    output.innerText = focusableEls.length;
}

appender1.addEventListener('click', onButtonClick);
appender2.addEventListener('click', onButtonClick);
appender3.addEventListener('click', onButtonClick);
