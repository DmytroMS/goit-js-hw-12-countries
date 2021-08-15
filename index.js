import { debounce } from 'debounce';
import templateCard from './scr/templates.hbs'
import countrylistTemplate from './scr/countrylist.hbs'
import fetchCountries from './scr/fetchCountries'


import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';


const refs = {
    input: document.querySelector('.js-input'),
    countryList: document.querySelector('.countries'),

}

const debounceOnInput = debounce(onInput, 500);
refs.input.addEventListener('input', debounceOnInput);

 

function onInput(e) {
    const inputValue = e.target.value;
    refs.countryList.innerHTML = '';   

 if (inputValue !== "") {
    return fetchCountries(inputValue).then(renderCountryCard);}
}




function renderCountryCard (countryName) {

    const countryCardMarkUp = templateCard(countryName);

  if (countryName.length > 10) {
    error({
      title: `Too many matches found.`,
      text: `We found ${countryName.length} countries. Please enter a more specific query!`,
      styling: 'brighttheme',
      delay: 1000,
    });
  }
  if (countryName.length >= 2 && countryName.length <= 10) {
      return countryName.forEach(country => (refs.countryList.innerHTML = countrylistTemplate(countryName))      
    );
  }
  if (countryName.length === 1) {
      return refs.countryList.insertAdjacentHTML('afterbegin', countryCardMarkUp);
  }
}