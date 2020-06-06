const weather = document.querySelector(".js-weather");

const API_KEY = "fc009e0dd4278fe78f2ba3948eabdf50";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    // then : 데이터가 완전히 들어온 다음 함수를 호출한다.
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(pos){
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        //latitude : latitude,
        //longitude : longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoErr(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErr);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init(); 
