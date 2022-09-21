import {homePage} from './home-loading.js'
import {menu} from './menu-loading.js'
import css from './styles.css'

const mainPage = (() => {
    const content = document.getElementById('content');
    let currentTab = 'Home';

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

    function loadModule(tab){
        const tabName = tab.innerText;

        if (tabName == currentTab){
            return;
        }
        
        if(content.children.length > 1){
            content.removeChild(content.lastChild);

            if(tabName == 'Home'){
                content.appendChild(homePage.loadHome());
            }
            else if(tabName == 'Menu'){
                content.appendChild(menu.showMenu());
            }
            else{
                
            }
            currentTab = tabName;
        }

    }

    function tabbedBrowsing(){
        const tabs = document.getElementsByClassName('tab');

        Array.from(tabs).forEach(tab => {
            tab.addEventListener('click', () => {
                loadModule(tab);
            });
        });
    }

    function loadPage(){
        const header = createHeader();

        createTitle(header);

        createTab(header, 'Home');
        createTab(header, 'Menu');
        createTab(header, 'Info');

        content.appendChild(homePage.loadHome());

        tabbedBrowsing();
    }

    return {loadPage};
})();

mainPage.loadPage();

