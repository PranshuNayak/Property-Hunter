import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Rentable from "./components/Property/PropertyRent";

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Navbar />

      <div className="container">
        <Rentable />
      </div>
    </div>
  );
}

export default App;
