import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import './App.css';

  function App() {
    const [countries, setCountries] =  useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // const names = data.map(country => country.name);
        // console.log(names);
      })
      .catch(err => console.log("Error"));
  }, [])
  
  //OnClick Handler
  const handleAddCountry = (country) => {
    console.log('Added', country);
  }

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      {
       countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
  );
}

export default App;
