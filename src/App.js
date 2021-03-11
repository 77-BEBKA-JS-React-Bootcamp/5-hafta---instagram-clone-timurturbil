
import './App.scss';
import { useState } from 'react';
const App = () => {
  const [temperature, setTemperature] = useState(0.0);
  const [name, setName] = useState("madrid");
  const [air, setAir] = useState("Clear")
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=b5d717f75dcc4256bb7191833211103&q=${name}&days=7`)
    .then(response => response.json())
    .then(data => {
      setTemperature(data.current.temp_c);
      setAir(data.current.condition.icon)
    }).catch(function () {
      console.log("error")
    });
  const handleChange = (input) => {
    setName(input.target.value)
  }
  return (
    <div>
      <div className="weather-wrapper">
        <div className="weather-card">
          <img className="image" src={air} />,
          <h1>{temperature}</h1>
          <p>{name}</p>
        </div>
      </div>
      <div className="inputText">
        <input type="text" onChange={handleChange} value={name} />
      </div>
    </div>
  );
}

export default App;
