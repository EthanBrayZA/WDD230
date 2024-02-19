// -------------------- Current Wether ---------------------------
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.12&lon=27.89&units=metric&appid=000316dee5050756ea86a2527d4effbb';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `png of ${desc}`);
    captionDesc.textContent = data.weather[0].main;
}

apiFetch();

// ---------------------- 3 Day Forecast ---------------------------

const weatherForecast = document.querySelector('#weather-forecast');
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=-26.12&lon=27.89&units=metric&appid=000316dee5050756ea86a2527d4effbb';

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

forecastApiFetch();

function displayForecast(data) {
    const forecastList = data.list;

    const firstThreeDays = [7, 15, 23];

    firstThreeDays.forEach(index => {
        const forecastCard = createForecastCard(forecastList[index]);
        weatherForecast.appendChild(forecastCard);
    });

}

function createForecastCard(list) {
    let card = document.createElement('div');
    let dt = document.createElement('p');
    let temp = document.createElement('p');
    let img = document.createElement('img');
    let desc = document.createElement('p');

    // Convert timestamp to Date object
    const date = new Date(list.dt * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Get short day name
    const shortDayName = getShortDayName(date.getDay());

    dt.textContent = `${shortDayName}`;
    temp.textContent = `${list.main.temp}`;
    img.setAttribute("src", `https://openweathermap.org/img/w/${list.weather[0].icon}.png`);
    img.setAttribute("alt", `${list.weather[0].description}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '50');
    img.setAttribute('height', '50');
    desc.textContent = `${list.weather[0].main}`;

    card.appendChild(dt);
    card.appendChild(temp);
    card.appendChild(img);
    card.appendChild(desc);

    return card;
}

function getShortDayName(dayNumber) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames[dayNumber];
}