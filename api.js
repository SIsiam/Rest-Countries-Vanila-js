fetch("https://restcountries.eu/rest/v2/all")
    .then(respo => respo.json())
    .then(myData => DisplayCountryRest(myData));


const DisplayCountryRest = countries => {
    const countrysDiv = document.getElementById("country-container");

    countries.forEach(country => {
        const countryDiv = document.createElement("div")
        countryDiv.className = "my-country"

        const countryInfo = `
        <h2> ${country.name} </h2>
        <img src=${country.flag} width ="300px"  />
        <h4> ${country.capital} </h4>
        <button onclick = "countryInformation('${country.name}')" class ="btn">Show Details</button>
        `;

        countryDiv.innerHTML = countryInfo;

        countrysDiv.appendChild(countryDiv);
    });

}

const countryInformation = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))

}

const renderCountryInfo = countryDetails => {

    const contryDetailsDiv = document.getElementById("country-details")
    contryDetailsDiv.innerHTML = `
    <h1>Name: ${countryDetails.name} </h1>
    <p>Population: ${countryDetails.population} </p>
    <p>Area: ${countryDetails.area} </p>
    <p>Area: ${countryDetails.region} </p>
    <h5>Area: ${countryDetails.currencies[0].name} </h5>
    <img src = "${countryDetails.flag}">
    `
}

// For loop 
/*
const DisplayCountryRest = countries => {

    const countrysDiv = document.getElementById("country-container");
    for (let j = 0; j < countries.length; j++) {

        const country = countries[j];

        const countryDiv = document.createElement("div")
        countryDiv.className = "country"

        const countryInfo = `
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p>
        `;

        countryDiv.innerHTML = countryInfo;

        countrysDiv.appendChild(countryDiv);

    }
}

*/