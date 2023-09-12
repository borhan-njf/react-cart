import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//icons
import cartIcon from '../../assets/icons/cart.svg'
import { cartContext } from '../../context/CartContextProvider'


export default function Navbar() {
  const{state}=  useContext(cartContext)
  return (
    <div>
        <Link to='/products'>Products</Link>
        <div>
            <Link to='/cart'><img src={cartIcon} alt="shop icon" /></Link>
            <span>{state.itemCounter}</span>
        </div>
    </div>
  )
}
