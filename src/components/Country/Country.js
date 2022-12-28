import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, region, population, flags} = props.country
    return (
        <div className='country'>
          <h1>Name: {name.common}</h1> 
          <img src={flags.png} alt="" />
          <h4>population: {population}</h4> 
          <p>Area: {area}</p>
          <p><small>Region: {region}</small></p>
          
        </div>
    );
};

export default Country;