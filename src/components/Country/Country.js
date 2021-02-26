import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    return (
        <div  className="country-area">
            <div>
                <h3>This is a {props.country.name}</h3>
                <p>Population {props.country.population}</p>
                <p>Region {props.country.region}</p>
            </div>
        </div>
    );
};

export default Country;