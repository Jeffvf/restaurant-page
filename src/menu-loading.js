const menu = (() => {
    const dishesList = [];
    const drinksList = [];

    const Dish = (name, ingredients, price) => {
        return {name, ingredients, price};
    }

    const Drink = (name, ingredients, isAlcoholic, price) => {
        return {name, ingredients, isAlcoholic, price};
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

            dishCard.innerHTML = `<h1>${dish.name}</h1>`;
            dishCard.innerHTML += `<p>${dish.ingredients}</p>`;
            dishCard.innerHTML += `<p>${dish.price}</p>`;

            dishes.appendChild(dishCard);
        });

        menu.appendChild(dishes);
    }

    const showDrinks = (menu) => {
        const drinks = document.createElement('div');

        drinks.classList.add('drinks');

        drinksList.forEach((drink) => {
            const drinkCard = document.createElement('div');

            drinkCard.innerHTML = `<h1>${drink.name}</h1>`;
            drinkCard.innerHTML += `<p>${drink.ingredients}</p>`;
            drinkCard.innerHTML += `<p>${drink.price}</p>`;

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