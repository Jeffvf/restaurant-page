const menu = (() => {
    const dishesList = [];
    const drinksList = [];

    const Dish = (name, ingredients, price) => {
        return {name, ingredients, price};
    }

    const Drink = (name, ingredients, price) => {
        return {name, ingredients, price};
    }

    const createDish = (name, ingredients, price) => {
        const newDish = Dish(name, ingredients, price);

        dishesList.push(newDish);
    }

    const createDrink = (name, ingredients, price) => {
        const newDrink = Drink(name, ingredients, price);

        drinksList.push(newDrink);
    }

    const createMenu = () => {
        createDish('Ratatouille', ['Onion', 'garlic', 'red bell pepper', 'yellow bell pepper', 'chopped fresh basil'], '$15.00');
        createDish('Soupe à l’oignon', ['Onions', 'beef stock', 'croutons', 'melted cheese'], '$17.00');

        createDrink('Kir', ['Blackcurrant liqueur', 'white wine'], '$7.50');
        createDrink('Pastis', ['Aniseed', 'licorice'], '$4.20');
    }

    const showDishes = (menu) => {
        const dishes = document.createElement('div');
        
        dishes.classList.add('dishes');

        dishesList.forEach((dish) => {
            const dishCard = document.createElement('div');
            dishCard.classList.add('card');

            const type = document.createElement('div');
            type.classList.add('dish');

            const description = document.createElement('div');
            description.classList.add('menu-description');

            const title = document.createElement('h1');
            title.textContent = `${dish.name}`;

            const ingredients = document.createElement('p');
            ingredients.textContent += `${dish.ingredients}`;

            const price = document.createElement('p');
            price.textContent += `${dish.price}`;

            description.appendChild(title);
            description.appendChild(ingredients);
            description.appendChild(price);

            dishCard.appendChild(type);
            dishCard.appendChild(description);

            dishes.appendChild(dishCard);
        });

        menu.appendChild(dishes);
    }

    const showDrinks = (menu) => {
        const drinks = document.createElement('div');

        drinks.classList.add('drinks');

        drinksList.forEach((drink) => {
            const drinkCard = document.createElement('div');
            drinkCard.classList.add('card');

            const type = document.createElement('div');
            type.classList.add('drink');

            const description = document.createElement('div');
            description.classList.add('menu-description');

            const title = document.createElement('h1');
            title.textContent = `${drink.name}`;

            const ingredients = document.createElement('p');
            ingredients.textContent += `${drink.ingredients}`;

            const price = document.createElement('p');
            price.textContent += `${drink.price}`;

            description.appendChild(title);
            description.appendChild(ingredients);
            description.appendChild(price);

            drinkCard.appendChild(type);
            drinkCard.appendChild(description);
            
            drinks.appendChild(drinkCard);
        });

        menu.appendChild(drinks);
    }

    const showMenu = () => {
        const menu = document.createElement('div');
        menu.id = 'menu';

        createMenu();
        showDishes(menu);
        showDrinks(menu);

        return menu;
    }

    return {createDish, createDrink, showMenu};
})();

export {menu};