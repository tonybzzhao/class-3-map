

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fpc2VyYm9ibyIsImEiOiJjbGlkbGU0anQwMG5uM2tvY2lpc3hyaDloIn0.y4yHlSPNI_fn_pjERNk8XA';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/standard', // style URL
    center: [0, 51.48], // starting position [lng, lat]
    zoom: 8 // starting zoom
});


 // Create a default Marker and add it to the map.
 const home1 = new mapboxgl.Marker({ color: 'blue', rotation: 0 })
 .setLngLat([-0.12657, 51.52405])
 .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const home2 = new mapboxgl.Marker({ color: 'blue', rotation: 0 })
 .setLngLat([-0.10267, 51.51769])
 .addTo(map);