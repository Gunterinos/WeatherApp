import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import customIcon from './cloud_Marker.png';

interface MapProps {
  location: {
    latitude: number;
    longitude: number;
    display_name: string;
  };
}

const Map: React.FC<MapProps> = ({ location }) => {
  function MyComponent() {
    const map = useMapEvents({
      click: (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], 
          { icon: L.icon({
            iconUrl: customIcon,
            iconSize: [36, 57] 
        }) }).addTo(map);
      }
    });
    return null;
  }

  return (
    <MapContainer center={[52.01,4.36]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
    </MapContainer>
  );
};

export default Map;
