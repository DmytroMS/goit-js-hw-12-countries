import templateCard from './scr/templates.hbs'

const refs = {
    input: document.querySelector('.js-input'),
}

const getCountryInfo = fetch('https://restcountries.eu/rest/v2/name/spain')
    .then(response => {
        return response.json();
    })
    .then(countryName => {
       // console.log(countryName);
        const countryCardMarkUp = templateCard(countryName);
      //  console.log(countryCardMarkUp);
        refs.input.insertAdjacentHTML('afterend', countryCardMarkUp )
    })
    .catch(error => {
        console.log('ERROR');
    })





// console.log(getCountryInfo);s