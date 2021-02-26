import React from 'react';
import './Country.css'

const Country = (props) => {
    
    //Using Destructuring for load data
    const {name, flag, population, region} = props.country;

    //for event handler
    const handleAddCountry = props.handleAddCountry;

    return (
        <div  className="country-area">
            <div>
                <h3>This is a {name}</h3>
                <img src={flag} alt=""/>
                <p>Population {population}</p>
                <p>Region {region}</p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;