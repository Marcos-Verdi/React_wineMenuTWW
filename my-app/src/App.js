import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Main from './Main'
import Glasses from './Glasses'
import Bottles from './Bottles'
import Wishlist from './Wishlist'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> } />
          <Route path='/glasses' element={ <Glasses /> } />
          <Route path='/bottles' element={ <Bottles /> } />
            <Route path='/wishlist' element={ <Wishlist /> } />
      </Routes>
    </>
  )
}
