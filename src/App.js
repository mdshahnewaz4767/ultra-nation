import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] =  useState([]);
 useEffect(() => {
   fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const names = data.map(country => country.name);
      console.log(names);
    })
    .catch(err => console.log("Error"));
 }, [])

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      {
       countries.map(country => <Country name={country.name}></Country>)
      }
    </div>
  );
}

export default App;
