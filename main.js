const fYear = document.getElementById("footerY");
const d = new Date(); 
fYear.textContent = d.getFullYear();

fetch(
'https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=625a907c29f418b5627de1371aef0f30&units=metric')
.then(response => response.json())
.then(data => {
	console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature in Cancun: "+data.main.temp+"\u00B0C";
    lowtemp.textContent = "Low Temperature: "+data.main.temp_min+"\u00B0C";;
    hightemp.textContent = "High Temperature: "+data.main.temp_max+"\u00B0C";;
    feels.textContent = "Feels Like: "+data.main.feels_like+"\u00B0C";;
});

const navToggle = document.getElementById('nav-toggle'); 
const menuList = document.getElementById('main-menu'); 
navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});