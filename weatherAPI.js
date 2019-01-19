$(document).ready(function() {
    
    function checkWeather() {
        var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=45.504640&lon=-73.612894';
        
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
        $('#temp').html(temp);
    }
});