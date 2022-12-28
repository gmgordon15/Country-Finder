let countryInput = document.querySelector(".country-input")
const inputButton = document.querySelector(".input-button")
const resultsContainer = document.querySelector(".results-container")



inputButton.addEventListener('click', function(e){
    e.preventDefault
    let countryName = countryInput.value
    const url = `https://restcountries.com/v2/name/${countryName}`
    console.log(countryName)
    console.log(url)
    fetch(url).then((res) => res.json())
    .then((data) =>{
        console.log(data)
        let name = data[0].name
        let population = data[0].population
        let currency = data[0].currencies[0].code
        let flag = data[0].flag
        let language = data[0].languages[0].name
        let capital = data[0].capital
        let continent = data[0].subregion




        resultsContainer.innerHTML= `

        <h2 class="Name">${name}</h2>
<img src="${flag}" alt="">
            


           
<h2>Currency: ${currency}</h2>
           
<h2>Language: ${language}</h2>
           
<h2>Capital: ${capital}</h2>
           
<h2>Continent: ${continent}</h2>
<h2>Population: ${population}</h2>
`


    })



    
})





