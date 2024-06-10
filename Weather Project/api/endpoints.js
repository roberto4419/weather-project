var apiKey = `0209c5be7c58332d74a775b434eb9e2e`
var units = `metric`
var language = `ro`

function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
 
function getCurrentWeatherDataUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${language}&units=${units}`;
}

function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${language}&units=${units}`;
}
