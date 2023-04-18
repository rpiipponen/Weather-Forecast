
document.getElementById("forecast").addEventListener("click", getData);

function getData() {
    console.log("forecast clicked");

    let zipcode = document.getElementById("zipcode").value;
    console.log("zipcode is " + zipcode);
    getWeather(zipcode); 
}

function getWeather(zip) {

    let endpoint = "http://api.openweathermap.org/data/2.5/weather?zip=";

    const apiKey = "4113f87e1cdc214143b121f3d4098584";

    //Create make the variable

    let url = endpoint + zip + "&units=metric&appid=" + apiKey;
    console.log("url is " + url);

    //Create XMLHttp object
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", responseHandler);

    xhr.responseType = "json";
    xhr.open("GET", url);

    xhr.send();

    
}

function responseHandler() {
    if(this.status == 200) {

        //Testing
    console.log(this.response);
    const data = this.response;
    console.log("City is " + data.name);
    console.log("temp is " + data.main.temp);
    console.log("Weather is "+ data.weather[0].description);

        //Parse JSON data
    let html = "<p> City: " + data.name + "</p>";
    html += "<p> Current temperature: " + data.main.temp + " °C" + "</p>";
    html += "<p> Weather description: " + data.weather[0].description + "</p>";
    html += "<p> Humidity: " + data.main.humidity + "</p>";
    html += "<p> Wind speed: " + data.wind.speed + " m/s " + "</p>";
    


    document.getElementById("weatherInfo").innerHTML = html;

    }

    else{

        document.getElementById("weatherInfo").innerHTML = "<p> No weather data was found </p>";

    }
}