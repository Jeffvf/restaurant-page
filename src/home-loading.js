import img from './img/food.jpeg';
import css from './styles.css';

const homePage = (() => {

    const createContainer = (className) => {
        const container = document.createElement('div');

        container.classList.add(className);

        return container;
    }

    const addHeadline = (element) => {
        const headline = document.createElement('h1');
        headline.textContent = 'Freshness in every bite';

        element.appendChild(headline);
    }

    const addDescription = (container) =>{
        addHeadline(container);
        const description = document.createElement('span');
        description.textContent = 'Taste the best dishes and drinks from french cuisine';
        description.style.fontSize = '25px';

        container.appendChild(description);
    }

    const loadHome = () => {
        const container = createContainer('description');
        addDescription(container);

        return container;
    }

    return {loadHome};
})();

export {homePage}