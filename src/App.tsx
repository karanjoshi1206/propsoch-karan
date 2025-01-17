import "./App.css";
import BottomTab from "./components/bottomTab/bottomTab";
import PropertyListings from "./components/propertyListings/propertyListings";

function App() {
  return (
    <div className="main">
      <div className="main_wrapper">
        <PropertyListings />
      </div>
      <BottomTab/>
    </div>
  );
}

export default App;
