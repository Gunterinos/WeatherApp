import { TileLayer , MapContainer , Marker , Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";

interface Location {
    latitude: number;
    longitude: number;
    display_name: string;
  }
  
  interface MapProps {
    location: Location;
  }
  

const Map: React.FC<MapProps> = ({ location }) => {

    const currentCity: Location = location;

    return (
        <MapContainer center={[52,4.35]} zoom={ 12 } scrollWheelZoom={true}>

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[ location.latitude, location.longitude ]}>
            <Popup>
            { currentCity.display_name }
            </Popup>       
        </Marker> 
    </MapContainer>
    
    )
}

export default Map;