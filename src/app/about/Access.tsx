"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
    iconUrl: (iconUrl as unknown) as string,
    shadowUrl: (iconShadow as unknown) as string,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

export default function Access(){
    const position: [number, number] = [35.729648, 140.052099];
    return(
        <MapContainer 
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height:"400px", width:"100%" }}
            >
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>練習場</Popup>
                </Marker>
            </MapContainer>
    );
}