import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import customIcon from './cloud_Marker.png';

// Defining props interface for the Map component
interface MapProps {
  location: {
    latitude: number;
    longitude: number;
    display_name: string;
  };
  getCurrentCityName: (position: any) => void;
}

// Map component function
const Map: React.FC<MapProps> = ({ location, getCurrentCityName }) => {
  // State to manage the marker
  const [marker, setMarker] = useState<L.Marker | null>(null);

  // Custom hook to handle map events
  function MyComponent() {
    const map = useMapEvents({
      // Event handler for click on the map
      click: (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;

        // Get the city name based on clicked coordinates
        getCurrentCityName({ coords: { latitude: lat, longitude: lng } });

        if (marker) {
          // If a marker exists, remove it from the map
          map.removeLayer(marker);
        }
        
        // Create a marker with custom icon
        const newMarker = L.marker([lat, lng], {
          icon: L.icon({
            iconUrl: customIcon,
            iconSize: [38, 57] // Adjust the size here (e.g., [width, height])
          })
        }).addTo(map);

        // Display the city name on marker click
        newMarker.bindPopup(location.display_name).openPopup();

        // Update the marker reference
        setMarker(newMarker);
      }
    });

    return null;
  }

  // Render the Map component
  return (
    <MapContainer center={[52.01,4.36]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent /> {/* Render MyComponent to handle map events */}
    </MapContainer>
  );
};

export default Map;
