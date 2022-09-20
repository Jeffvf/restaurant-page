import img from './img/food.jpeg';
import css from './styles.css';

function addImage(container) {
    const image = document.createElement('img');
    image.src = img;
    image.style.width = '100%';
    image.style.height = '100%';

    container.appendChild(image);
}

function createContainer(className){
    const container = document.createElement('div');

    container.classList.add(className);

    return container;
}

function addHeadline(element){
    const headline = document.createElement('h1');
    headline.textContent = 'Wonderful restaurant';

    element.appendChild(headline);
}

function addDescription(container){
    addHeadline(container);
    const description = document.createTextNode('This is the most wonderful restaurant ever!');
    
    container.appendChild(description);
}

function loadHome(){
    const container = createContainer('description');
    addImage(container);
    addDescription(container);

    return container
}

export {loadHome}