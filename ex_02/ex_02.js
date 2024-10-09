
const map = L.map('map').setView([46.603354, 1.888334], 6); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// loc logo //
const schools = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Nantes", coords: [47.2184, -1.5536] },
    { name: "Lyon", coords: [45.7640, 4.8357] },
    { name: "Bordeaux", coords: [44.8378, -0.5792] },
    { name: "Toulouse", coords: [43.6047, 1.4442] }
];

// creation logo //
const epitechIcon = L.icon({
    iconUrl: 'epitech.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// marker //
schools.forEach(school => {
    L.marker(school.coords, { icon: epitechIcon })
        .addTo(map)
        .bindPopup(`${school.name} rocks!`);
});