import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const state = useSelector(state => state.handleCart);
  var total = 0;
  const itemList = (item) => {
    total += item.price;
    return (
      <li className='list-group-item d-flex justify-content-between lh-sm'>
        <div>
          <h6>{item.title.substring(0, 12)}</h6>
        </div>
        <span>{`$${item.price}`}</span>
      </li>
    )
  }
  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{`$${total}`}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">Pay</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Checkout;