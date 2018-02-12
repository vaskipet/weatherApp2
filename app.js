// init weather
const weather = new Weather('Helsinki');
// init ui
const ui = new UI();

// When the page loads the weather is fetched
document.addEventListener('DOMContentLoaded', getWeather);

//Change loc event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const location = document.getElementById('location').value;
  e.preventDefault();

  weather.changeLocation(location);

  // Get new informtion and display
  getWeather();
});

function getWeather(){
  
  weather.getWeather()
  .then(results => {
      console.log(results)
      ui.paint(results);
  })
  .catch(err => console.log(err))
}
