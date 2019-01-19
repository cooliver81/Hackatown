$(document).ready(function() {
    
    //Location
    // Check whether browser supports Geolocation API or not
    if (navigator.geolocation) // Supported
    {
       navigator.geolocation.getCurrentPosition(success, error);
    }
    else
    {
      alert("Oops! This browser does not support HTML Geolocation.");
    }
    
    function getLocation() {
        var URL = ''
    }
    
    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        checkWeather(lat, long);
    }
    
    function error() {
        console.log('Error')
    }
    
    
    //Weather API
    function checkWeather(lat, long) {
        var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}';
        
        $.getJSON(URL, function(data){
            console.log(data);
            updateWeather(data);
        });
    }
    checkWeather();
    
    
    function updateWeather(data){
        var city = data.name;
        var temp = data.main.temp;
        
        $('#city').html(city);
        $('#temp').html("The weather is " + temp);
    }
});