import { useState } from "react";
import TripList from "./components/TripList";
import "./App.css";

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowTrips(!showTrips)}>
        {showTrips ? "Hide" : "Show"} Trips
      </button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
