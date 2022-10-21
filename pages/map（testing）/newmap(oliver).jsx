import React from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = ""

export default function NewMap() {
    const map = new mapboxgl.Map({})
    
}