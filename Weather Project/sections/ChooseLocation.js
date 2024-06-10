const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const galati = document.querySelector(".dropdown-menu .galati");
const constanta = document.querySelector(".dropdown-menu .constanta");
const brasov = document.querySelector(".dropdown-menu .brasov");


function updateWeather(currentCity){
    localStorage.setItem("city", currentCity);
    updateCity(currentCity)
    displayCurrentWeather(currentCity);
    getForecastFor5Days(currentCity);
}

function updateCity(city){
    let cityNameElement = document.querySelector(".city-name");
    cityNameElement.innerText = city;
}


bucharest.addEventListener("click", function(){
    updateWeather("București");
})

timisoara.addEventListener("click", function(){
    updateWeather("Timișoara");
})

oradea.addEventListener("click", function(){
    updateWeather("Oradea");
})

arad.addEventListener("click", function(){
    updateWeather("Arad");
})

sibiu.addEventListener("click", function(){
    updateWeather("Sibiu");
})

galati.addEventListener("click", function(){
    updateWeather("Galați");
})

constanta.addEventListener("click", function(){
    updateWeather("Constanța");
})

brasov.addEventListener("click", function(){
    updateWeather("Brașov");
})