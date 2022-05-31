var button = document.querySelector('.btn')
var inputValue = document.querySelector('.input')
 

button.addEventListener('click',function()
{
    fetch('https://api.weatherapi.com/v1/current.json?key=dc994bd78dc44e3784d190925221705&q='+inputValue.value+'&aqi=yes')
    .then(response => response.json())
    .then(data => {

       let a = data.location.name;
       let b = data.current.temp_c;
       let icon = data.current.condition.icon;

        document.getElementById('fcity').innerText =a;
        document.getElementById('ftemp').innerText = b +"°C";
        document.getElementById('image').src = `https:${icon}`;
    })

 fetch('https://api.countapi.xyz/hit/aakash-weather')
    .then(response => response.json())
    .then(data => {
    })

    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today =  dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;


document.getElementById("fdate").innerText = today;
   
})
   

//darkmode

let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  document.body.classList.add("body-dark");

  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  document.body.classList.remove("body-dark");

  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});
