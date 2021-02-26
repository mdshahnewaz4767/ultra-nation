import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import './App.css';
import Cart from './components/Cart/Cart';

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
    const [cart, setCart] = useState([]);

    const handleAddCountry = (country) => {
      console.log('Added', country);
      const newCart = [...cart, country];
      setCart(newCart);
    }

    return (
      <div className="App">
        <h1>Country Loaded: {countries.length}</h1>
        <h4>Country Added: {cart.length}</h4>
        <Cart cart={cart}></Cart>
        {
        countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>
    );
  }

export default App;
