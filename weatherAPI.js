$(document).ready(function() {
    //Location
    // Check whether browser supports Geolocation API or not
    if (navigator.geolocation) // Supported
    {
       navigator.geolocation.getCurrentPosition(success);
    }
    else
    {
      error();
    }
    
    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        checkWeather(lat, long);
    }
    
    function error() {
        console.log('Error');
        alert("Oops! This browser does not support HTML Geolocation.");
    }
    
    
    //Weather API
    function checkWeather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        
        $.getJSON(URL, function(data){
            console.log(data);
            updateWeather(data);
        });
    }
    
    function updateWeather(data){
        var city = data.name;
        var temp = data.main.temp;
        var description = data.weather[0].description;
        
        $('#city').html(city);
        $('#temp').html("The weather is " + temp);
        $('#description').html(description);
    }
});

