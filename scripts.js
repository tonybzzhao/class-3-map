

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
const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="text-align:left;">
      <p>猫狗第一次见面的地方，害羞</p>
      <img src="https://github.com/tonybzzhao/class-3-map/blob/main/images/kx.JPG" alt="kx" style="width:100%; height:auto;">
    </div>
  `);

// create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="text-align:left;">
      <p>猫狗一起上学的地方，开心鸭</p>
      <img src="https://github.com/tonybzzhao/class-3-map/blob/main/images/ucl.JPG" alt="ucl" style="width:100%; height:auto;">
    </div>
  `);

// create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="text-align:left;">
      <p>第一代猫狗窝，地址：Flat 86, Witley Court, Coram Street, London WC1N 1HD</p>
      <img src="https://github.com/tonybzzhao/class-3-map/blob/main/images/home1.JPG" alt="home1" style="width:100%; height:auto;">
    </div>
  `);

// create the popup
const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="text-align:left;">
      <p>第二代猫狗窝，猫咪2023年4月来看狗狗。地址：Flat 403, 10 Hosier Lane, London, EC1A 9LS</p>
      <img src="https://github.com/tonybzzhao/class-3-map/blob/main/images/home2.JPG" alt="home2" style="width:100%; height:auto;">
    </div>
  `);

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