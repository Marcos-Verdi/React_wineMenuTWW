import React from 'react'
import WishlistHeader from './WishlistHeader'
import { useStateValue } from './StateProvider'
import WishlistBottle from './WishlistBottle'

export default function Wishlist() {

  const [{basket},dispatch] = useStateValue()

  return (
    <div className='wishlist-main-container'>
        <WishlistHeader />
        <div className='wishlist-bottles-container'>
          <div className='wishlist-bottles-container-row'>
            {basket.map(item => (
              <WishlistBottle
                id={item.id}
                img={item.img}
                winery={item.winery}
                name={item.name} 
                type={item.type}
                grape={item.grape}
                country={item.country}
                region={item.region}
                price={item.price}/>
            ))}
          </div>
        </div>
    </div>
  )
}
