import React from 'react'
import'./Map.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = [-30.04690995669101, -51.18327485272599]

export default props => 
        <MapContainer center={position} zoom={17} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup> 
                <strong>Natafitness</strong><br /> Felizardo Furtado, 320.
                </Popup>
            </Marker>
        </MapContainer>

  

