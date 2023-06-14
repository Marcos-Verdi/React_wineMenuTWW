import React from 'react'
import { useStateValue } from './StateProvider'

export default function Bottle({id, img, winery, name, type, grape, country, region, price}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log(basket)
    dispatch ({
      type: "ADD_TO_BASKET",
      item: {
        key: id,
        id: id,
        img: img,
        winery: winery,
        name: name,
        type: type,
        grape: grape,
        country: country,
        region: region,
        price: price
      }
    });
  };

  return (
    <div className='bottle-container' key={id} id={id}>
      <div className='bottle-info-1'>
        <img 
          className='bottle-info-img' 
          src={img} 
          alt='wine'/>
        <div className='bottle-info-container-1'>
            <p className='bottle-info-winery--name'>{winery}, {name}</p>            
        </div>
      </div>
      <div className='bottle-info-2'>
        <p className='bottle-info-type'>{type}</p>
        <p className='bottle-info-grape'>{grape}</p>
        <p className='bottle-info-country--region'>{country}, {region}</p>
        <p className='bottle-info-price'>S/ {price}</p>
        <button className='bottle-info-button'
                onClick={addToBasket}>
          Wishlist
        </button>
      </div>
    </div>
  )
}
