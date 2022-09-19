import img from '/home/jefferson/top/restaurant-page/img/food.jpeg'

function addImage(element) {
    const image = document.createElement('img');
    image.src = img;

    element.appendChild(image);
}

function addHeadline(element){
    const headline = document.createElement('h1');
    headline.textContent = 'Wonderful restaurant';
    headline.style.color = 'white';

    element.appendChild(headline);
}

function loadElements(){
    const content = document.getElementById('content');
    console.log(content);
    addImage(content);
    addHeadline(content);
}

export {loadElements}