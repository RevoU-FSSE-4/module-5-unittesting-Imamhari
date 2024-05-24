import "./App.css";
import Weather from "./components/weather";

function App() {
  return (
    <>
      <div className="weather">
        <h1>Weather</h1>
      </div>
      <div className="App">
        <Weather />
      </div>
    </>
  );
}

export default App;
