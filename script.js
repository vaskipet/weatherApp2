class Weather {
    constructor(location) {
        this.apiKey = '71caaafea1cb132af3cecad39715f455';
        this.location = location;

    }

    async getWeather () {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change the loc
    changeLocation(location) {
        this.location = location;
    }
}