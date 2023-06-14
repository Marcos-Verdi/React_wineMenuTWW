import React from 'react'
import { HiOutlineBookmark } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import mainLogo from './logo_blanco_tww.png'

export default function Header() {

  const [{basket},dispatch] = useStateValue();

  return (
    <div className='header-container'>

        <div className='logo-container'>
          <Link to='/' 
                style={{ textDecoration:'none' }}>
            <img src={mainLogo} className='logo-img' alt='the logo'/>
          </Link>
        </div>
        <Link to='/wishlist' className='wishlist-container'>
          <HiOutlineBookmark style={{ color:'white',
                                      height:'1.5rem',
                                      width:'1.5rem' }}/>
          <p>wishlist</p><span className='header-basket-count'>({basket.length})</span>
        </Link>
        
    </div>
  )
}
