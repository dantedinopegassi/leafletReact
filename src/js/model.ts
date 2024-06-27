// CON TYPESCRIPT

import { control, Map, TileLayer } from "leaflet";
import "leaflet.fullscreen"

const Model = {
    map: null as L.Map | null,

    initializeMap(lat: number, lng: number, zoom: number): void {
        this.map = new Map('map').setView([lat, lng], zoom);

        new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        control.fullscreen().addTo(this.map)
    },


}

export default Model