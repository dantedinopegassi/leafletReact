// SIN TYPESCRIPT

const Controller = {
    init() {
        this.loadMap();
    },

    loadMap(){
        const initialLat= -33.030788;
        const initialLng= -61.306231;
        const initialZoom = 14;
        View.renderMap(initialLat,initialLng,initialZoom);
    },

    
}