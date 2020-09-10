const searchField = document.querySelector('#search-field');
const form = document.querySelector('form');
const kacity = document.querySelector('.city');
const localTim = document.querySelector('.local-time');
const mainTemp = document.querySelector('.main-temp');
const feelsLike = document.querySelector('.feels-like .value');
const tempHi= document.querySelector('.hi');
const tempLow = document.querySelector('.low');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('.desc');
const humidity = document.querySelector('.humidity span');
const pressure = document.querySelector('.pressure span');
const windSpeed = document.querySelector('.speed');
const windDirection = document.querySelector('.direction');
const cloudiness = document.querySelector('.cloudiness span');

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    getWeatherInfo(searchField.value);
});


function getWeatherInfo(cityName){
    if(!cityName){
        return;
    }
    const apiKey = '9ddf57db420ad015c1b7cc510e3e152d';
    const baseUrl ='https://api.openweathermap.org/data/2.5/';
    const url = new URL(`${baseUrl}forecast`);
    url.searchParams.append("q",cityName);
    url.searchParams.append("appid", apiKey);
    url.searchParams.append("units", "metric");
    url.searchParams.append("cnt", 5);
    console.log(url.href);
    fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json();
            }
        })
        .then(data=>{
            const {list, city} = data;
            console.log(city.name);
            kacity.textContent = `${city.name},`;
            const today = new Date(list[0].dt*1000);
            localTim.textContent = ` ${today.toDateString()}`;
            mainTemp.textContent = ` ${Math.round(list[0].main.temp)}\u00b0`;
            feelsLike.textContent = `${Math.round(list[0].main.feels_like)}\u00b0`
            tempHi.textContent = `${Math.round(list[0].main.temp_max)}\u00b0`
            tempLow.textContent = `${Math.round(list[0].main.temp_min)}\u00b0`
            weatherIcon.setAttribute('src', ` http://openweathermap.org/img/wn/${list[0].weather[0].icon}@4x.png`)
            weatherDesc.textContent= `${list[0].weather[0].description}`
            humidity.textContent = `${list[0].main.humidity}%`;
            pressure.textContent = `${list[0].main.pressure}hPa;`
            windSpeed.textContent = `${Math.round(list[0].wind.speed)*3.6}km/h`;
            windDirection.textContent = `${Math.round(list[0].wind.deg)}\u00b0`;
            cloudiness.textContent = `${list[0].clouds.all}%`;

    })
    .catch(err=>{ console.log("Kindly enter correct city name")})
}


    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
        .then(registration=>{
            console.log('Service Worker Successfully registered!');
            registration.addEventListener('updatefound', ()=>{
                var installingWorker = registration.installing;
                console.log('New Service worker is being installed')
            })
        })
        .catch((err)=>{ console.log('Service worker registration failed', err)});
    }
    else{
        console.log('Service worker not supported!');
    }