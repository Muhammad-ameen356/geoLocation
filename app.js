let x = document.getElementById("demo");
let google_map = document.getElementById('google_map');

const getCord = () => {
    console.log("ameen");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

const showPosition = (position) => {
    let lat = position.coords.latitude,
        long = position.coords.longitude,
        coords = lat + ', ' + long;

    x.innerHTML = "Latitude: " + lat +
        "<br>Longitude: " + long;

    document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk/?q=' + coords + '&z=16&output=embed')

}