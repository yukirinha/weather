//Time
let now = new Date();

let h1 = document.querySelector("h1");

let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

h1.innerHTML =
  "Today is " +
  date +
  " " +
  month +
  " " +
  year +
  ", " +
  day +
  "<br />" +
  hour +
  ":" +
  minute;

//Place
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchTextInput");
  let city = document.querySelector("h2");
  if (searchInput.value) {
    city.innerHTML = searchInput.value;
  } else {
    city.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", search);

//Temperature
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=city&appid=34c5aaa7875a0711395a0a7a83b11e76&units=metric";

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#nowTemp");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temperature + "ºC";
}

axios.get(apiUrl).then(showTemperature);
