class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    const tempK = weather.main.temp;
    const tempC = (tempK - 273.15).toFixed(0);

    this.location.textContent = weather.name;
    this.string.textContent = weather.weather[0].description;
    this.desc.textContent = `${tempC} degreees celsius`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Air pressure: ${weather.main.pressure}`;
  }
}


const changeIcon = () => {
  let faicon = document.getElementById('faicon');
  faicon.innerHTML = '&#xf2dc;';

  setTimeout(function() {
      faicon.innerHTML = '&#xf185;';
  }, 2000);
  setTimeout(function() {
      faicon.innerHTML = '&#xf0c2;';
  }, 4000);
  setTimeout(function() {
      faicon.innerHTML = '&#xf0e7;';
  }, 6000);
  setTimeout(function() {
      faicon.innerHTML = '&#xf2c7;';
  }, 8000);
}

// run animation
changeIcon();
// run animation every 10 secs
setInterval(changeIcon, 10000);