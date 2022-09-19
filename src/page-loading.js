import img from '/home/jefferson/top/restaurant-page/img/food.jpeg'

function addImage(element) {
    const image = document.createElement('img');
    image.src = img;

    element.appendChild(image);
}

function loadElements(){
    const content = document.getElementById('content');
    console.log(content);
    addImage(content);
}

export {loadElements}