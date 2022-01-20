// let app = document.querySelector(".weather"); //  блок для того чтобы выводить погу
let city = document.querySelector(".city"); // блок для вывода города

// // запрос получает данные о погоде только по городу
// fetch(
//         "http://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg,RU&appid=51d1d0a1921b759daf26dad3f5f28daa"
//     )
//     .then((data) => data.json())
//     .then((data) => (app.textContent = Math.round(data.main.temp - 273.15))); // очень не понятно зачем??

// //  запрос определят город
// fetch(
//         "https://geo.ipify.org/api/v2/country?apiKey=at_Hw9HqpTOjpkwOCGmpkYCO3KKYHXUt&ipAddress=178.66.158.67"
//     )
//     .then((log) => log.json())
//     .then((log) => (city.innerHTML = log.location.region));

// // функция определяет местоположение пользователя
// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position); //   position.coords.latitude, position.coords.longitude;
// });

// let options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
// };

// function success(pos) {
//     var crd = pos.coords;
//     console.log(crd);
//     console.log(`Ваше текущее местоположение:`);
//     console.log(`Широта: ${crd.latitude}`);
//     console.log(`Долгота: ${crd.longitude}`);
//     console.log(`Плюс-минус ${crd.accuracy} метров.`);
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);
// function test(){
//   return navigator;
// }
// test();
// console.log('hello');
let x = 0;
let y = 0;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
// при согласие пользовтаеля дать геоданные, выполняется эта функция
async function ip() {
    // функция получения ip
    //  let res = await fetch('https://api.db-ip.com/v2/free/self');
    //  let data = res.json();
    //  return data
    //  console.log(c)
    //&ipAddress=${x}`
    
    let c = 0;
  let res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_Hw9HqpTOjpkwOCGmpkYCO3KKYHXUt`)
    .then((city) => city.json())
    .then((city) => (c=city.location.region)); // получаем город, который мы должны использовать для получении температуры
    console.log(c)
   
              fetch(  `http://api.openweathermap.org/data/2.5/weather?q=${c},RU&appid=51d1d0a1921b759daf26dad3f5f28daa&units=metric`
            )
            .then((data) => data.json())
            .then((data) => (console.log(data.main.temp)));
}

function success(pos) {
  var crd = pos.coords;

  let x = crd.latitude;
  let y = crd.longitude;
  console.log(`Широта: ${x}`);
  console.log(`Долгота: ${y}`);
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&exclude={part}&appid=51d1d0a1921b759daf26dad3f5f28daa&units=metric`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data.current.temp); // app можно вывести данные сюда
    });

  // ip();
  // fetch(
  // "https://geo.ipify.org/api/v2/country?apiKey=at_Hw9HqpTOjpkwOCGmpkYCO3KKYHXUt&ipAddress=178.66.158.67")
  //     )
  //     .then((log) => log.json())
  //     .then((log) => (city.innerHTML = log.location.region));
}

// если пользователь не дает свое согласие то следуем тому скрипту который ниже
function error(err) {
  console.warn("пользователь не дал сове согласие");
  ip(); // получение ip при запрете
  // получить ip пользователя
  // узнать город пользователя по его ip
  // зная город мы можем вычислить погоду
}

navigator.geolocation.getCurrentPosition(success, error, options);
