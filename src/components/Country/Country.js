import React from 'react';
import './Country.css'

const Country = (props) => {
    
    //Using Destructuring for load data
    const {name, flag, population, region} = props.country;
    return (
        <div  className="country-area">
            <div>
                <h3>This is a {name}</h3>
                <img src={flag} alt=""/>
                <p>Population {population}</p>
                <p>Region {region}</p>
            </div>
        </div>
    );
};

export default Country;