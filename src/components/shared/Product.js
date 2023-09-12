import React , {useContext} from "react";
import { Link } from "react-router-dom";
//functions
import { shorten ,isInCart,quantityCount } from "../../helpers/functions";
//context
import { cartContext } from "../../context/CartContextProvider";
//icons
import trashIcon from '../../assets/icons/trash.svg'



export default function Product({ productData }) {
  const {state , dispatch} = useContext(cartContext);
  return (
    <div>
      <img alt="product" src={productData.image} style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`${productData.id}`}>Details</Link>
        <div>
        {quantityCount(state,productData.id) ===1 && <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:productData})}><img src={trashIcon} alt="" /></button>}
          {quantityCount(state,productData.id) > 1 && <button onClick={()=> dispatch({type:'DECREASE',payload:productData})}>-</button>}
          {isInCart(state,productData.id) ? <button onClick={()=>dispatch({type:'INCREASE',payload:productData})}>+</button> :
          <button onClick={()=>dispatch({type:'ADD_ITEM',payload:productData})}>Add to cart</button>
          }

        </div>
      </div>
    </div>
  );
}
