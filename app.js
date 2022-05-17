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

        document.getElementById('name').innerText =a;
        document.getElementById('weather').innerText = b;
        document.getElementById('image').src = `https:${icon}`;
    })

    

.catch(err => alert("Wrong City Name"))
})