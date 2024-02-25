import './App.css';
import Map from './Map'; // Import the Map component

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Weather Now</h1> {/* Title */}
      <section className='map-container'>
        <Map/>
      </section>  
    </div>
  );
}

export default App;