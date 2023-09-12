import React, { useContext } from 'react'

//context
import { cartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helpers/functions';

//icons
import trashIcon from '../../assets/icons/trash.svg'

export default function Cart({data}) {
  const {title , image , price , quantity}=data;
  const {dispatch}=useContext(cartContext)
  return (
    <div>
        <img src={image} alt="product" style={{width:'200px'}} />
        <div>
          <h3>{shorten(title)}</h3>
          <p>{price} $</p>
        </div>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          {
            quantity > 1 ?
            <button onClick={()=> dispatch({type:'DECREASE' , payload:data})}>-</button> :
            <button onClick={()=>dispatch({type:'REMOVE_ITEM' , payload:data})}><img src={trashIcon} alt="" /></button> 
          }
          <button onClick={()=>dispatch({type:'INCREASE',payload:data})}>+</button>
        </div>
    </div>
  )
}
