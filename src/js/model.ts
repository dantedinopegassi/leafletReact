// CON TYPESCRIPT

import { Control, Map, TileLayer } from "leaflet";

const Model = {
    map: null as L.Map | null,

    initializeMap(lat: number, lng: number, zoom:number):void {
        this.map = new Map('map').setView([lat, lng], zoom);

        new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        new Control.Fullscreen().addTo(this.map);
    },


}

export default Model