import React from 'react'
import { useStateValue } from './StateProvider'

export default function WishlistBottle({id, img, winery, name, type, grape, country, region, price}) {

  const [{ basket }, dispatch] = useStateValue();

  const removeBottle = () => {
    dispatch ({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className='wishlist-bottle-container' id={id}>
      <div className='wishlist-bottle-info-1'>
        <img 
          className='wishlist-bottle-info-img' 
          src={img} 
          alt='wine'/>
        <div className='wishlist-bottle-info-container-1'>
            <p className='wishlist-bottle-info-winery--name'>{winery}, {name}</p>            
        </div>
      </div>
      <div className='wishlist-bottle-info-2'>
        <p className='w-bottle-info-type'>{type}</p>
        <p className='w-bottle-info-grape'>{grape}</p>
        <p className='w-bottle-info-country--region'>{country}, {region}</p>
        <p className='w-bottle-info-price'>S/ {price}</p>
        <button
          className='w-bottle-info-button'
          onClick={removeBottle}>
          Remove
        </button>
      </div>
    </div>
  )
}
