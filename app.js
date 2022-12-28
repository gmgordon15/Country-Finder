let countryInput = document.querySelector(".country-input")
const inputButton = document.querySelector(".input-button")
const resultsContainer = document.querySelector(".results-container")



inputButton.addEventListener('click', function(){
    let countryName = countryInput.value
    const url = `https://restcountries.com/v2/name/${countryName}?fullText=true`
    console.log(countryName)
    console.log(url)
    fetch(url).then((res) => res.json())
    .then((data) =>{
        console.log(data)
    })
})