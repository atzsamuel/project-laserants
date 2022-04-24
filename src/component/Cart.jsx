import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import {delItem} from '../redux/actions/cart'
const Cart = (productItem) => {
  const state = useSelector(state => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch({
      type: 'DELITEM',
      payload: item
    })
  }

  const productItems = (productItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={productItem.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(productItem)} className='btn-close float-and' aria-label='Close'></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={productItem.image} alt={productItem.title} height="200px" width="180px" />
              <div className="col-md-4">
                <h3>{productItem.title.substring(0, 12)}</h3>
                <p className='lead fw-bold'>{`$${productItem.price}`}</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="text-center">Your cart is empty</h3>
          </div>
        </div>
      </div>
    )
  }

  const button = () => {
    return (
       <div className="container">
         <div className="row">
           <Link to="/checkout" className="btn btn-outline-primary">Proceed to checkout</Link>
         </div>
       </div>
    )
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(productItems)}
      {state.length !== 0 && button()}
    </>

  )
}

export default Cart;