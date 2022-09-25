const info = (() => {
    let restaurantAddress = "";
    const restaurantPhoneNumbers = [];

    const createContentBody = () => {
        const contentBody = document.createElement('div');
        
        contentBody.id = 'info';
        
        return contentBody;
    }

    const addAboutInfo = () =>{
        const aboutDiv = document.createElement('div');
        const title = document.createElement('h1');
        const about = document.createElement('p');

        title.textContent = 'About us:';
        about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure voluptates illo, iusto neque provident, soluta rerum aspernatur dolorem architecto hic deleniti tempore harum ut blanditiis atque expedita fuga consequatur!';

        aboutDiv.appendChild(title);
        aboutDiv.appendChild(about);

        return aboutDiv;
    }

    const setPhoneNumbers = (phoneNumbers) => {
        restaurantPhoneNumbers.push.apply(restaurantPhoneNumbers, phoneNumbers);
    }

    const addPhoneNumbers = () => {
        const phoneNumbers = document.createElement('div');
        const title = document.createElement('h1');

        title.textContent = 'Phone Number:';
        
        phoneNumbers.appendChild(title);

        for(let i = 0; i < restaurantPhoneNumbers.length; i++){
            const phoneNumber = document.createElement('p');

            phoneNumber.textContent = restaurantPhoneNumbers[i];

            phoneNumbers.appendChild(phoneNumber);
        }

        return phoneNumbers;
    }

    const setAddress = (address) => {
        restaurantAddress = address;
    }

    const addAddressInfo = () => {
        const addressDiv = document.createElement('div');
        const title = document.createElement('h1');
        const address = document.createElement('p');

        title.textContent = 'Address:';
        address.textContent = restaurantAddress;

        addressDiv.appendChild(title);
        addressDiv.appendChild(address);

        return addressDiv;
    }

    const setInfo = (address, phoneNumbers) => {
        setAddress(address);
        setPhoneNumbers(phoneNumbers);
    }

    const getInfo = () => {
        const info = [];

        info.push(addAboutInfo());
        info.push(addPhoneNumbers());
        info.push(addAddressInfo());

        return info;
    }

    const pageInit = () => {
        const address = '880 Cleveland St.Hagerstown, MD 21740';
        const phoneNumbers = ['123 456789', '987 654321'];

        setInfo(address, phoneNumbers);
    }

    const displayInfo = () => {

        if(restaurantAddress == ''){
            pageInit();
        }

        const contentBody = createContentBody();
        const info = getInfo();

        for(let i = 0; i < info.length; i++){
            contentBody.appendChild(info[i]);
        }

        return contentBody;
    }

    return {displayInfo};
})();

export {info};