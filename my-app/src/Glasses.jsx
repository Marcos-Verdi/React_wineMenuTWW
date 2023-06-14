import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

export default function Glasses() {
  return (
    <div className='glass-list--container'>
      
      <div className='glass-title--container'>
        <Link to="/">
          <IoIosArrowBack className='glass-back-arrow'
                          style={{ color:"white",
                                    height: "3rem",
                                    width: "2rem",
                                    marginRight: "2rem"}}/>
        </Link>
        <h1 className='glass-list--title'>Wines by the glass</h1>
      </div>

      <ul className='glass-list'>
        <li className='glass-item'>Ponte de Barca, Vinho Verde</li>
        <li className='glass-item'>Andeluna, Chardonnay</li>
        <li className='glass-item'>Montlaiz Dandelion, Bonarda</li>
        <li className='glass-item'>Emiliana Adobe, Cabernet Sauvignon</li>
        <li className='glass-item'>Pampas de Ica, Quebranta Rose</li>
        <li className='glass-item'>Real Tesoro, Glera (Cava)</li>
      </ul>
      
    </div>
  )
}
