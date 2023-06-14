import React, { useState } from 'react';
import Bottle from './Bottle.jsx';
import Header from './Header.jsx';
import FilterPanel from './FilterPanel.jsx';
import wines from './data.js';

export default function Bottles() {

  const [allWines, setWines] = useState(wines);

  const generateCountryOptions = () => {
    return [...new Set(wines.map(wine => (wine.country)))]
  }

  const generateGrapeOptions = () => {
    return [...new Set(wines.map(wine => (wine.grape)))]
  }

  const handleCountryFilter = (country) => {
    const filteredWines = wines.filter((wine) => {
      if (wine.country === country) {
        return wine
      }
    });

    setWines(filteredWines);
  }

  const handleGrapeFilter = (grape) => {
    const filteredWines = wines.filter((wine) => {
      if (wine.grape === grape) {
        return wine
      }
    });

    setWines(filteredWines);
  }

  return (
    <>
      <Header />
      <div className='bottles-main-container'>
        <FilterPanel 
          className='filter-panel-container'
          countries={generateCountryOptions()}
          grapes={generateGrapeOptions()}
          onCountryFilter={handleCountryFilter}
          onGrapeFilter={handleGrapeFilter}/>
        <div className='bottles-container'>
          <div className='container-row'>

            {allWines.map(wine => ( 
              <Bottle
                key={wine.id} 
                id={wine.id}
                img={wine.img}
                winery={wine.winery}
                name={wine.name}
                type={wine.type}
                grape={wine.grape}
                country={wine.country}
                region={wine.region}
                price={wine.price} />
            ))}

          </div>
        </div>
        
      </div>
    </>
    

    
  )
}
