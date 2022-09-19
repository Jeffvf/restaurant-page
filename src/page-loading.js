import img from './img/food.jpeg';
import css from './styles.css';

const content = document.getElementById('content');

function addImage() {
    const image = document.createElement('img');
    image.src = img;
    image.style.width = '100%';
    image.style.height = '100%';

    content.appendChild(image);
}

function createContainer(className){
    const container = document.createElement('div');

    container.classList.add(className);

    content.appendChild(container);

    return container;
}

function addHeadline(element){
    const headline = document.createElement('h1');
    headline.textContent = 'Wonderful restaurant';

    element.appendChild(headline);
}

function addDescription(){
    const container = createContainer('description');
    addHeadline(container);
    const description = document.createTextNode('This is the most wonderful restaurant ever!');

    container.appendChild(description);
}

function loadElements(){
    addImage();
    addDescription();
}

export {loadElements}