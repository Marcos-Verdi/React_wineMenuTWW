import React from 'react'
import { Link } from 'react-router-dom'
import { GiBrokenBottle, GiWineGlass } from 'react-icons/gi'
import './style.css'

export default function Main() {
  return (
    <div className='main--main-container'>

      <h1 className='main-title'>Wines</h1>
      <div className='main-links'>
        <Link className='main-glass' to='/glasses'>
          <GiWineGlass className='main-glass-logo'
                        style={{ height: "3rem",
                                width: "3rem",
                                color: "white" }}/>
        </Link>
        <Link className='main-bottle' to='/bottles'>
          <GiBrokenBottle className='main-bottle-logo'
                          style={{ height: "3rem",
                                    width: "3rem",
                                    color: "white" }}/>
        </Link>
      </div>
      
    </div>
  )
}
