const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
const BASE_URL_QUERY_PARAMS = `?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`

const fetchForecastWeather = async (city, dateFrom, dateTo) => {
    const url = `${BASE_URL}/${city}/${dateFrom}/${dateTo}${BASE_URL_QUERY_PARAMS}`
    try {
        const response = await fetch(url).then(value => value.json());
        return response.days;
    } catch (error) {
        console.log('WeatherAPI Error:', error);
    }
}

const fetchTodayWeather = async (city) => {
    const url = `${BASE_URL}/${city}/today${BASE_URL_QUERY_PARAMS}`
    try {
        const response = await fetch(url).then(value => value.json());
        return response.days[0];
    } catch (error) {
        console.log('WeatherAPI Error:', error);
    }
}

export { fetchForecastWeather, fetchTodayWeather }