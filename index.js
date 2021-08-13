import templateCard from './scr/templates.hbs'

const refs = {
    input: document.querySelector('.js-input'),

}

refs.input.addEventListener('input', onInput);

 
function onInput(e) {
    e.preventDefault();
    const inputValue = e.target.value  // e.currentTarget     // e.target.value;
    console.log(inputValue);
 //   const searchForm = inputValue..query.value;
    
}


fetchCountry(inputValue)
    .then(renderCountryCard)
    .catch(error => { console.log('ERROR'); })
    


function fetchCountry(x) {
 return fetch(`https://restcountries.eu/rest/v2/name/${x}`)
    .then(response => {
        return response.json();
    })
}


function renderCountryCard (countryName) {
        const countryCardMarkUp = templateCard(countryName);
        refs.input.insertAdjacentHTML('afterend', countryCardMarkUp )
}

