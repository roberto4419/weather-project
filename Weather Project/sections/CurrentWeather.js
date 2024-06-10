function displayCurrentWeather(city) {
    const defaultCityWeatherUrl = getCurrentWeatherDataUrl(city);
  
    fetch(defaultCityWeatherUrl)
      .then((response) => response.json())
      .then((data) => {
        
        const { dt, name, main, weather, wind } = data;
  
        const currentDayOfTheWeek= getDayOfTheWeek(dt);
        const currentTime = getTime(dt);
        
        const temp = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
  
        const description = weather[0].description;
        const weatherIcon = getWeatherIcon(weather[0].icon);
  
        const windSpeedInKmPerHour = windToKmPerHour(wind.speed);
        const windSpeed = Math.round(windSpeedInKmPerHour);
  
        populateDataInDOM(currentDayOfTheWeek, currentTime, temp, realFeel, description, windSpeedInKmPerHour, windSpeed, weatherIcon, name);
        
      });
  
      function populateDataInDOM(currentDayOfTheWeek, currentTime, temp, realFeel, description, windSpeedInKmPerHour, windSpeed, weatherIcon, name) {
          let weatherContainer = document.querySelector(".current-weather");
  
          let cityElement = document.querySelector('.city');
          cityElement.innerText = name;
  
          let dayTimeContainerElement = document.querySelector(".day-time-container");
          dayTimeContainerElement.innerHTML = `<strong>${currentDayOfTheWeek}</strong> , ${currentTime} `;
  
          let temperatureElement = document.querySelector(".temperature");
          temperatureElement.innerText = `${temp}°C`;
  
          let weatherIconElement = document.querySelector(".weather-icon");
          weatherIconElement.attributes["src"].value = weatherIcon;
  
          let realFeelElement = document.querySelector(".real-feel");
          realFeelElement.innerText = `${realFeel} °C`;
  
          let descriptionElement = document.querySelector(".description");
          descriptionElement.innerText = description;
  
          let windElement = document.querySelector(".wind");
          windElement.innerText = `${windSpeed} km/h`;
      } 
  }
    