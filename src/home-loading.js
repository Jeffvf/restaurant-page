import img from './img/food.jpeg';
import css from './styles.css';

const homePage = (() => {
    const addImage = (container) => {
        const image = document.createElement('img');
        image.src = img;
        image.style.width = '100%';
        image.style.height = '100%';

        container.appendChild(image);
    }

    const createContainer = (className) => {
        const container = document.createElement('div');

        container.classList.add(className);

        return container;
    }

    const addHeadline = (element) => {
        const headline = document.createElement('h1');
        headline.textContent = 'Wonderful restaurant';

        element.appendChild(headline);
    }

    const addDescription = (container) =>{
        addHeadline(container);
        const description = document.createTextNode('This is the most wonderful restaurant ever!');
        
        container.appendChild(description);
    }

    const loadHome = () => {
        const container = createContainer('description');
        addImage(container);
        addDescription(container);

        return container
    }

    return {loadHome};
})();

export {homePage}