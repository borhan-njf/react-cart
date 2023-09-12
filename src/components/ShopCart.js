import React, { useContext } from 'react'
import { cartContext } from '../context/CartContextProvider'
import { Link } from 'react-router-dom';
//components
import Cart from './shared/Cart';

export default function ShopCart() {
  const{state,dispatch} = useContext(cartContext);
  return (
   <div>
     <div>
        {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
    </div>
   
      {
        state.itemCounter>0 && <div>
          <div><span>Total Items :</span><span>{state.itemCounter}</span></div>
          <div><span>Total Payments :</span><span>{state.totalPrice} $</span></div>
          <div>
            <button onClick={()=> dispatch({type:'CLEAR'})}>Clear</button>
            <button onClick={()=>dispatch({type:'CHECKOUT'})}>Checkout</button>
          </div>
        </div>
      }
      {
        state.checkout && <div>
          <h3>Checked Out Successfully</h3>
          <Link to='/products'>Buy More</Link>
        </div>
      }
      {
        !state.checkout && state.itemCounter===0 && <div>
          <h3>Want to Buy ?</h3>
          <Link to='/products'>Go Back To Shop</Link>
        </div>
      }
    
   </div>
  )
}
