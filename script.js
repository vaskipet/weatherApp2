// The data is hidden until something is written to the input or selected from the dropdown
document.getElementById('rawdata').style.visibility = 'hidden';

const getData = e => {
    // after the function fires the data is visible for the user
    document.getElementById('rawdata').style.visibility = 'visible';
    // storing the location variable either from the input OR from the selection
    const location = document.getElementById('location').value || document.getElementById('select').value;
    // the url variable where the is the query address
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=71caaafea1cb132af3cecad39715f455';

    // Creating an XMLHttpRequest object 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    // specifying what to do with the response 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {

            // parsing the data
            jsonObj = JSON.parse(xhr.responseText);

            const data = jsonObj;
            // storing the temperature variables so i can use them later
            const tempK = data.main.temp;
            const tempC = (tempK - 273.15);

            // displaying the data to the user
            document.getElementById('cityname').innerHTML = `
            <h4 class="text-center mt-2">${data.name}</h4>
            <img class="rounded mx-auto d-block picture" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
            <p class="text-center">${(tempC).toFixed(0)} degrees celsius and ${data.weather[0].description}.</p>
            `;
        }
    }
}



// just a small animation I did based on a tutorial nevermind about this
const changeIcon = () => {
    let faicon = document.getElementById('faicon');
    faicon.innerHTML = '&#xf2dc;';

    setTimeout(function() {
        faicon.innerHTML = '&#xf185;';
    }, 2000);
    setTimeout(function() {
        faicon.innerHTML = '&#xf0c2;';
    }, 4000);
    setTimeout(function() {
        faicon.innerHTML = '&#xf0e7;';
    }, 6000);
    setTimeout(function() {
        faicon.innerHTML = '&#xf2c7;';
    }, 8000);
}

// run animation
changeIcon();
// run animation every 10 secs
setInterval(changeIcon, 10000);