


const input = document.getElementById("input")
const button = document.getElementById("search")
const country = document.getElementById("country")
const des = document.getElementById("des")
const city = document.getElementById("city")
const temp = document.getElementById("temp")

const apiKey = "4712d68dbcbed0315bcd0d38cd4ba507";

const fetchWeather = () => {
    if (input.value === "") {
        alert("Please enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            des.textContent = data.weather[0].description;
            let celcius = data.main.temp - (273.5); // yha temp ki value celcius me store kiya taaki toFixed naam ki property use kr sku.
            temp.textContent = celcius.toFixed(1) + "°C";
            // city.textContent =  
            // country.textContent =  

    })
}
button.addEventListener("click", fetchWeather);