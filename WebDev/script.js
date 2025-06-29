let card = document.getElementById("card");
let cityDisplay = document.getElementById("showCity");
let tempDisplay = document.getElementById("showTemperature");
let humidityDisplay = document.getElementById("humidity");
let description = document.getElementById("description");

let submit = document.getElementById("submit");
let apiKey = `b1c8b585784d57e51497116a8390e28e`;

let error = document.getElementById("errorMsg");

submit.addEventListener("click", () => {
    let cityName = document.getElementById("searchCity").value.trim().toLowerCase();
    cityDisplay.textContent = `${cityName.charAt(0).toUpperCase() + cityName.slice(1)}`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // Reset display first
    card.style.display = "block";
    error.style.visibility = "hidden";
    error.textContent = "";

    if (cityName === "") {
        card.style.display = "none";
        error.style.visibility = "visible";
        error.textContent = `Please enter a city first`;
        return; // 🚫 don't fetch if city is blank
    }

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod != 200) {
                // API returned an error even though status was 200
                error.style.visibility = "visible";
                error.textContent = `${data.message}`;
                card.style.display = "none"
                return;
            }

            // If valid city...
            card.style.display = "block";
            tempDisplay.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
            humidityDisplay.textContent = `Humidity : ${data.main.humidity}%`;
            description.textContent = `${data.weather[0].description}`;

            //Show emoji
            let emoji = document.getElementById("weatherEmoji");
            const getEmoji = (desc) => {
                desc = desc.toLowerCase();
                if (desc.includes("cloud")) return "☁️";
                if (desc.includes("clear")) return "☀️";
                if (desc.includes("rain")) return "🌧️";
                if (desc.includes("snow")) return "❄️";
                if (desc.includes("thunder")) return "⛈️";
                return "🌡️"; // default
            };

description.textContent = `${data.weather[0].description}`;
emoji.textContent = getEmoji(data.weather[0].description);

        })
        .catch(err => {
            console.error(err);
            error.style.visibility = "visible";
            error.textContent = "Something went wrong. Try again later.";
        });
});

