import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './Map'; // Import the Map component

// App component function
const App: React.FC = () => {
  // State to manage current location
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    display_name: "",
  });
  
  // Effect hook to get current location on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
    );
  }, []);

  // Function to get current city name based on coordinates
  function getCurrentCityName(position : any) {
    const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ position.coords.latitude + '&lon=' +  
                          position.coords.longitude ;
     
    fetch(url, {
        method: "GET",
        mode: "cors",      
      }).then((response) => response.json())
        .then((data) => setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          display_name: `${data.address.city}, ${data.address.country}`
        })
      );
  }

  // Render the App component
  return (
    <div className="App">
      <h1 className="title">Weather Now</h1> {/* Title with a specific class */}
      <section className='map-container'>
        <Map location={currentLocation} getCurrentCityName={getCurrentCityName}/> {/* Render Map component */}
      </section>  
    </div>
  );
}

export default App;
