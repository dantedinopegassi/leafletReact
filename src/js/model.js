// SIN TYPESCRIPT

const Model = {
    map: null,

    initializeMap(lat, lng, zoom) {
        this.map = L.map('map').setView([lat, lng], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        L.control.fullscreen().addTo(this.map);
    },


}