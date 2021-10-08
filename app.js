let x = document.getElementById("demo");
let google_map = document.getElementById('google_map');

const getCord = () => {
    console.log("ameen");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

const showPosition = (position) => {
    console.log(position);
    let lat = position.coords.latitude,
        long = position.coords.longitude,
        coords = lat + ', ' + long;

    x.innerHTML = "Latitude: " + lat +
        "<br>Longitude: " + long;

    document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk/?q=' + coords + '&z=16&output=embed')
}

const showError = (error) => {
    console.log(error);
    if (error.code == error.PERMISSION_DENIED) {
        console.log(error.message);
    } else if (error.code == error.POSITION_UNAVAILABLE) {
        console.log(error.message);
    }
}