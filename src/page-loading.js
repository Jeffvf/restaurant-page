import img from './img/food.jpeg';
import css from './styles.css';

function addImage(element) {
    const image = document.createElement('img');
    image.src = img;

    element.appendChild(image);
}

function addHeadline(element){
    const headline = document.createElement('h1');
    headline.textContent = 'Wonderful restaurant';

    element.appendChild(headline);
}

function loadElements(){
    const content = document.getElementById('content');
    console.log(content);
    addImage(content);
    addHeadline(content);
}

export {loadElements}