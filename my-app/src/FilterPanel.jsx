import React, { useState } from 'react';
import './style.css';

export default function FilterPanel({ countries,grapes,onCountryFilter,onGrapeFilter }) {

  const priceOptions = [100,200,300]
  const [country, setCountry] = useState("");
  const [grape, setGrape] = useState("");

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setCountry(value);
    onCountryFilter(value);
  };

  const handleGrapeChange = (event) => {
    const { value } = event.target;
    setGrape(value);
    onGrapeFilter(value);
  };

  return (
    <div>
      <div className='filter-options-container'>
          <h1>Filter by</h1>
          
            <div className="filter-options-country">
              <label for='country-dropdown' className='options-countries-label'>Country</label>
              <select 
                id='country-dropdown'
                className='filter-box'
                onChange={handleCountryChange}>
                <option value=''>Select</option>
                {countries.map(country => (
                  <option value={country} id={country}>{country}</option>
                ))}
              </select>
            </div>
            
          
          <div className="filter-options-grape">
            <label for='grape-dropdown' className='options-grapes-label'>Grape</label>
            <select
              id='grape-dropdown'
              className='filter-box'
              onChange={handleGrapeChange}>
              <option>Select</option>
              {grapes.map(grape => (
                <option value={grape} id={grape}>{grape}</option>
              ))}
            </select>
          </div>

          
          <div className="filter-options-price">
              <label for='price-dropdown' className='options-price-label'>Price</label>
              <select id='price-dropdown' className='filter-box'>
                <option>Select</option>
                {priceOptions.map(priceOption => (
                  <option value={priceOption} id={priceOption}>Less than S/{priceOption}</option>
                ))}
              </select>
          </div>
        </div>
    </div>
  )
}
