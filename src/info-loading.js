const info = (() => {
    let restaurantAddress = "";
    const restaurantPhoneNumbers = [];

    const createContentBody = () => {
        const contentBody = document.createElement('div');
        
        contentBody.id = 'info';
        
        return contentBody;
    }

    const addAboutInfo = () =>{
        const about = document.createElement('p');
        about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure voluptates illo, iusto neque provident, soluta rerum aspernatur dolorem architecto hic deleniti tempore harum ut blanditiis atque expedita fuga consequatur!';

        return about;
    }

    const setPhoneNumbers = (phoneNumbers) => {
        restaurantPhoneNumbers.push.apply(restaurantPhoneNumbers, phoneNumbers);
    }

    const addPhoneNumbers = () => {
        const phoneNumbers = document.createElement('div');
        
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
        const address = document.createElement('p');

        address.textContent = restaurantAddress;

        return address;
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

    return {pageInit, displayInfo};
})();

export {info};