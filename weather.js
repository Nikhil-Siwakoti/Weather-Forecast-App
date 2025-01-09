const apikey = "319bf497618842aa96e153128240406"
const apiurl = "http://api.weatherapi.com/v1/current.json?"
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector("weather-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + `key=${apikey}` + `&q=${city}`)
    let data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.location.name + "," + data.location.country;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.current.wind_kph + "Km/hr";
    document.querySelector(".weather-icon").innerHTML=data.current.condition.icon;
  

    
        
    document.querySelector(".weather").style.display ="block"




}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

