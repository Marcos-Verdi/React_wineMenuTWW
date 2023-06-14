import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from './logo_blanco_tww.png'

export default function WishlistHeader() {
  return (
    <div className='wishlist-header-container'>
        <Link to='/'
                className='wishlist-logo-container' 
                style={{ textDecoration:'none' }}>
            <img src={mainLogo} className='wishlist-logo-img' alt='the logo'/>
        </Link>
        
        <Link to='/bottles' className='back-link-container'>
            <p>Back to Bottlelist</p>
        </Link>
    </div>
  )
}
