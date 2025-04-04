

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fpc2VyYm9ibyIsImEiOiJjbGlkbGU0anQwMG5uM2tvY2lpc3hyaDloIn0.y4yHlSPNI_fn_pjERNk8XA';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/standard', // style URL
    center: [0, 51.48], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

const markerOptions = {
    color: '#005D63', // default color for the marker
};

 // create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Flat 86, Witley Court, Coram Street, London WC1N 1HD'
);

 // create the popup
 const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Flat 403, 10 Hosier Lane, London, EC1A 9LS'
);

 const home1 = new mapboxgl.Marker(markerOptions)
 .setLngLat([-0.12657, 51.52405])
 .setPopup(popup1)
 .addTo(map);

const home2 = new mapboxgl.Marker(markerOptions)
 .setLngLat([-0.10267, 51.51769])
 .setPopup(popup2)
 .addTo(map);