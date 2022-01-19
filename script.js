let app = document.querySelector(".weather");
let city = document.querySelector(".city");
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg,RU&appid=51d1d0a1921b759daf26dad3f5f28daa"
)
  .then((data) => data.json())
  .then((data) => (app.textContent = Math.round(data.main.temp - 273.15)));

fetch(
  "https://geo.ipify.org/api/v2/country?apiKey=at_Hw9HqpTOjpkwOCGmpkYCO3KKYHXUt&ipAddress=178.66.158.67"
)
  .then((log) => log.json())
  .then((log) => (city.innerHTML = log.location.region));

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position); //   position.coords.latitude, position.coords.longitude;
});

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  console.log(crd);
  console.log(`Ваше текущее местоположение:`);
  console.log(`Широта: ${crd.latitude}`);
  console.log(`Долгота: ${crd.longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

console.log('hello');