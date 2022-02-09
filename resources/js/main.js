// Global variables
let countriesList = document.getElementById("countriesList");

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        console.log(data);
        flags(data);
    } catch (err) {
        console.log("Error: ", err);
    }
}

const flags = data => {

    let elements = '';
    let language = '';
    data.forEach(item => {

        for(languages in item.languages) {
            languagesArray = item.languages[languages];
            if(languagesArray.length <= 0){
                language = "No language to display";
            } else {
                for(languageIndex = 0; languageIndex < languagesArray.length; ++languageIndex) {
                    language += languagesArray[languageIndex] + ", ";
                }
            }
        }

        elements += `
        <tr>
            <th>${item.name.official}</th>
            <th>${item.capital}</th>
            <th>${item.region}</th>
            <th>${language}</th>
            <th>${item.population}</th>
            <th><img src="${item.flags.png}"></th>
        </tr>    
        `;
    });
    countriesList.innerHTML = elements;
}