import {loadElements} from './page-loading.js'
import css from './styles.css'

const content = document.getElementById('content');

function createHeader(){
    const header = document.createElement('header');

    header.classList.add('header');

    content.appendChild(header);

    return header;
}

function createTitle(header){
    const title = document.createElement('h1');

    title.textContent = 'Le Festin';

    title.classList.add('title');

    header.appendChild(title);
}

function createTab(header, name){
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = name;

    header.appendChild(tab);
}

function loadPage(){
    const header = createHeader();

    createTitle(header);

    createTab(header, 'Home');
    createTab(header, 'Menu');
    createTab(header, 'Info');
}

loadPage();

