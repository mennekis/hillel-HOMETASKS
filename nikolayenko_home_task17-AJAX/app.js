fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=ODESA&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((res) => res.json())
  .then((w) => {
    let ourDate = new Date(w.dt * 1000);
    let sunrise = new Date(w.sys.sunrise * 1000);
    let sunset = new Date(w.sys.sunset * 1000);
    console.log(w);
    weather.innerHTML = `
    <div class="wrapper">
    <div class="top-data">
        <div class="city-data">
          <div class="city"><h1>${w.name}</h1></div>
          <div class="date">${ourDate}</div>
          <div class="sunrise">Восход - ${sunrise}</div>
          <div class="sunset">Закат - ${sunset}</div>
        </div>
        <div class="city__weather-icon">
          <img
            src="http://openweathermap.org/img/w/${w.weather[0].icon}.png"
            alt="weather-icon"
          />
          <p>Температура - ${w.main.temp}℃</p>
        </div>
      </div>
      <div class="bottom-data">
        <div class="bottom-left">
          <p>Влажность - ${w.main.humidity}%</p>
          <p>Давление - ${w.main.pressure} мм</p>
          <p>Cкорость ветра -${w.wind.speed} м/с</p>
        </div>
        <div class="bottom-right">
          <p>Ощущается как - ${w.main.feels_like}℃</p>
          <p>${w.weather[0].description}</p>
          <p>${ourDate}</p>
        </div>
      </div>
  </div>`;
  });
