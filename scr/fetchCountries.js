function fetchCountries(x) {
  const url = `https://restcountries.eu/rest/v2/name/${x}`;
  return fetch(url)
    .then(response => {
        return response.json();
    })
      .catch(error => console.log(error));
}

export default fetchCountries;