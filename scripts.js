

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fpc2VyYm9ibyIsImEiOiJjbGlkbGU0anQwMG5uM2tvY2lpc3hyaDloIn0.y4yHlSPNI_fn_pjERNk8XA';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/standard', // style URL
    center: [0, 51.48], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

const markerOptions = {
    color: '#E74FA3', // default color for the marker
};

// create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
    '猫狗第一次见面的地方，害羞'
);

// create the popup
const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
    '猫狗一起上学的地方，开心鸭'
);

// create the popup
const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
    '第一代猫狗窝，地址：Flat 86, Witley Court, Coram Street, London WC1N 1HD'
);

// create the popup
const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
    '第二代猫狗窝，猫咪2023年4月来看狗狗。地址：Flat 403, 10 Hosier Lane, London, EC1A 9LS'
);

const kx = new mapboxgl.Marker(markerOptions)
    .setLngLat([-0.12460, 51.53130])
    .setPopup(popup1)
    .addTo(map);

const ucl = new mapboxgl.Marker(markerOptions)
    .setLngLat([-0.13399, 51.52452])
    .setPopup(popup2)
    .addTo(map);

const home1 = new mapboxgl.Marker(markerOptions)
    .setLngLat([-0.12657, 51.52405])
    .setPopup(popup3)
    .addTo(map);

const home2 = new mapboxgl.Marker(markerOptions)
    .setLngLat([-0.10267, 51.51769])
    .setPopup(popup4)
    .addTo(map);