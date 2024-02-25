import { TileLayer , MapContainer, Marker, Popup  } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function Map() {

  return (
    <MapContainer center={[0,0]} zoom={ 2 } scrollWheelZoom={true}>

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>
  )
}