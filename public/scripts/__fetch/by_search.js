//** Weather API */

const API_KEY = "027ce57509bb59a70142e574bc5b62cd";
const gMAP_API_KEy = `AIzaSyBey-FGtBP9sJy04qbeLlZawAqCjA3rz4o`
let bypass = 'http://cors-anywhere.herokuapp.com/'

//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key};

/** Day  name Array */
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//** Months  */
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/**Weather image */
let weather_img = {
    "cloudy": "../icon/cloud_sun.png",
    "rainy": "../icon/rainy.png",
    "sunny": "../icon/sun.png"
}

//
let location_name = null;
let location_code = null;
//** Getting Browser location */
let getLocation = () => {

}
const search = () => {
        try {
            let searchfield = document.querySelector('.search-field');
            if (searchfield.value != '') {
                location_name = searchfield.value;
                getData();
            } else {
                searchfield.style.border = "red";
            }
        } catch (error) {
            console.log("Error Comes", error);
            navigator.geolocation;
        }
    }
    /** premisiion state */
report = (state) => {
    console.log('Permission ' + state);
}



/** fetching the weather info */
getData = () => {
    let URL = `${bypass}api.openweathermap.org/data/2.5/weather?q=${location_name},${location_code}&appid=${API_KEY}`;
    fetch(URL).then((response) => response.json())
        .then((result) => {
            console.log(result);
            new update(result);

        });
}
class update {

    constructor(result) {

        this.result = result;
        this.temp_value = `${(this.result.main.temp - 273.15)} &#8451;`;
        this.feels = `feels like ${parseInt(this.result.main.feels_like - 273.15)} &#8451;`;
        this.temp_max_min = `max ${(this.result.main.temp_max - 273.15)} &#8451; - min : ${(result.main.temp_min - 273.15)} &#8451;`;
        this.wind = ` <i class="fa fa-wind"></i> Speed : ${this.result.wind.speed} Km/h `;
        this.today = new Date(this.result.dt);
        this.country = `${this.result.sys.country}`;
        this.place = `${this.result.name}`;
        this.condition = this.result.weather[0].main;
        this.icon = `<img id="wicon" src="http://openweathermap.org/img/w/${this.result.weather[0].icon}.png" alt="Weather icon">`;
        this.main = result.weather[0].main;

        this.date_format();
        this.weather_condition();
        this.update_html();
    }

    date_format = () => {
        let recent = new Date();
        this.date_html = `${days[this.today.getDay()]} || ${this.today.getDate()} ${months[recent.getMonth()]} ${recent.getFullYear()}`;
    }

    weather_condition = () => {

        switch (this.main) {
            case 'Clouds':
                this.src = '../icon/cloudy_sunny_sun.png';
                break;
            case 'Rain':
                this.src = '../icon/rain.png';
                break;
            case 'Snow':
                this.src = '../icon/snow.png';
                break;
            case 'Sunny' || 'Clear':
                this.src = '../icon/sun.png';
                break;
            case 'Partially cloudy':
                this.src = '../icon/cloud_sun.png';
                break;
            case 'Haze':
                this.src = '../icon/sun_set.png';
                break;
            default:
                this.src = '../icon/sun.png';
        }

    }


    update_html = () => {
        let temparature = document.querySelector('#temprature');
        let date = document.querySelector('#date');
        let locate = document.querySelector('#location');
        let max_min = document.querySelector('#max_min_temp');
        let stat_img = document.querySelector('.weather-img');
        let others = document.querySelector('#details');
        max_min.innerHTML = this.temp_max_min;
        temparature.innerHTML = this.icon + this.temp_value;
        date.innerHTML = this.date_html;
        locate.innerHTML = `${this.place} || ${this.country}`;
        stat_img.innerHTML = `<img src=${this.src} alt=" " class="stat-img ">`;
        others.innerHTML = `${this. wind } ,</br>${this.main} ${this.feels} `;

    }

}