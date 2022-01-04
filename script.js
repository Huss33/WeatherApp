//create a form with a "Search for City:" header and user input box and search button
//attach weather api for aquiring information on the current and future weather for cities searched

var today = moment();
$('#currentDate').text(today.format("(MM/Do/YYYY)"));

$('.btn-primary').on('click',function(){

    var getCity = $('.form').click(function(event){
        event.preventDefault();
        // $(this).text('');
    })
    
    var citySelect  = $('#citySearch').val();
        localStorage.setItem('#city', '+citySelect+');
                      $('#citySearch').val('');
    // console.log(citySelect);
    
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q={userCity}&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var wind = data.wind.speed;
var humidity = data.main.humidity;
var description = data.weather[0].description;
var userCity = data.name;

$("#weatherDescription").append(description);
$("#icon").attr("src", icon);
$("#temp").append("Temp " + temp + " °F");
$("#wind").append("Wind " + wind + " MPH");
$("#humidity").append("Humidity " + humidity + "%");
$("#city").append(userCity);
})

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var requestedDate = data.list[2].dt_txt;
var pic = "https://api.openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png";
var degrees = Math.floor(data.list[2].main.temp);
var breeze = data.list[2].wind.speed;
var wetness = data.list[2].main.humidity;

$(".date1").append(requestedDate);
$(".image1").attr("src", pic);
$(".tempr1").append("Temp: " + degrees + " °F");
$(".winds1").append("Wind: " + breeze + " MPH");
$(".moisture1").append("Humidity: " + wetness + "%")
})

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var requestedDate = data.list[10].dt_txt;
var pic = "https://api.openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png";
var degrees = Math.floor(data.list[10].main.temp);
var breeze = data.list[10].wind.speed;
var wetness = data.list[10].main.humidity;

$(".date2").append(requestedDate);
$(".image2").attr("src", pic);
$(".tempr2").append("Temp: " + degrees + " °F");
$(".winds2").append("Wind: " + breeze + " MPH");
$(".moisture2").append("Humidity: " + wetness + "%")
})

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var requestedDate = data.list[18].dt_txt;
var pic = "https://api.openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png";
var degrees = Math.floor(data.list[18].main.temp);
var breeze = data.list[18].wind.speed;
var wetness = data.list[18].main.humidity;

$(".date3").append(requestedDate);
$(".image3").attr("src", pic);
$(".tempr3").append("Temp: " + degrees + " °F");
$(".winds3").append("Wind: " + breeze + " MPH");
$(".moisture3").append("Humidity: " + wetness + "%")
})

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var requestedDate = data.list[26].dt_txt;
var pic = "https://api.openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png";
var degrees = Math.floor(data.list[26].main.temp);
var breeze = data.list[26].wind.speed;
var wetness = data.list[26].main.humidity;

$(".date4").append(requestedDate);
$(".image4").attr("src", pic);
$(".tempr4").append("Temp: " + degrees + " °F");
$(".winds4").append("Wind: " + breeze + " MPH");
$(".moisture4").append("Humidity: " + wetness + "%")
})

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+citySelect+"&units=imperial&appid=ebd38e742bba915adba81bca72953857", function(data) {
// console.log(data);

var requestedDate = data.list[34].dt_txt;
var pic = "https://api.openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png";
var degrees = Math.floor(data.list[34].main.temp);
var breeze = data.list[34].wind.speed;
var wetness = data.list[34].main.humidity;

$(".date5").append(requestedDate);
$(".image5").attr("src", pic);
$(".tempr5").append("Temp: " + degrees + " °F");
$(".winds5").append("Wind: " + breeze + " MPH");
$(".moisture5").append("Humidity: " + wetness + "%")
})

})
// $('.form').reset();