var myWeather = document.querySelectorAll('.city-weather h2 span');
var myCity = document.querySelectorAll('.container-fluid h2 span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult.name);
        console.log(apiResult.weather[0].main);
        console.log(apiResult.weather[0].description);
        console.log(apiResult.main.humidity);

        myCity[0].innerHTML = apiResult.name;
        myWeather[0].innerHTML = apiResult.weather[0].main;
        myWeather[1].innerHTML = apiResult.weather[0].description;
        myWeather[2].innerHTML = apiResult.main.humidity;

    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=80015,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
