// import './App.css';
import Abouts from './components/Abouts';
import Banners from './components/Banners';
import Navbars from './components/Navbars';
import Pickups from './components/Pickups';
import Shipments from './components/Shipments';
import Locations from './components/Locations';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Banners/>
      <Abouts/>
      <Shipments/>
      <Pickups/>
      <Locations/>
    </div>
  );
}

export default App;
