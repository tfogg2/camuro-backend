import React from 'react'
import { Link } from 'react-router-dom'
import Checkout from '../Checkout'
import SelectUSState from 'react-select-us-states'


const Cart = props => {
  const products = props.cartProducts
  const titles = products.map((product) => (product.title))
  const total = props.total
  const shipTotal = total + 11
  const sum = shipTotal * 100

  window.scrollTo(0, 0)

  if(products.length > 0 ){
    return (
      <div className="cart">
        <h1>Checkout</h1>
        <div className="cart-right">
          <h2>Shopping Bag</h2>
          {props.cartProducts.map((product, index) => (
            <div className="cart-product">
              <div className="cart-product-image">
                <img src={product.image}/>
              </div>
              <div className="cart-product-info">
                <div className="cart-product-title">
                  <h3>{product.title}</h3>
                </div>
                <div className="cart-product-price">
                  <span>${product.price}</span>
                </div>
                <div className="remove-product">
                  <a onClick={ () => props.removeProduct(index, product.price)}>Remove</a>
                </div>
              </div>
            </div>
            ))}
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-item">Merchandise: <span>${total}</span></div>
              <div className="order-item">Shipping: <span>$11</span></div>
              <div className="order-item">Tax: <span>$0</span></div>
              <div className="order-total">ORDER TOTAL: <span><b>${shipTotal}</b></span></div>
            </div>
        </div>
        <div className="cart-left">
          <h2>Shipping Info   <label className="required">Required</label></h2>
          <span>*We only ship to the United States at this time.</span>
          <form>
            <input className="half" placeholder="First Name" type="text" />
            <input className="half" placeholder="Last Name" type="text" />
            <input placeholder="Street Address" type="text" />
            <input placeholder="Apt#, Floor, etc. (Optional)" type="text" />
            <input className="half" placeholder="City" type="text" />
            <SelectUSState id="state" className="half"/>
            <input placeholder="Zip Code" type="text" />
          </form>
          <form>
            <div className="billing-check">
              <label>Billing address same as shipping address.</label><input className="check" type="checkbox" checked="true" onClick="toggleChecked"/>
            </div>
          </form>
          <div className="contact-info">
            <h2>Contact Info  <label className="required">Required</label></h2>
            <form>
              <input type="email" placeholder="Email" />
            </form>
          </div>
      </div>
          <div className="cart-checkout">
            <div className="contact-us">
              <p>We like to get in touch before parting with our clean cameras.<br/> Email us at <a href="mailto:camuro.co@gmail.com" alt="email">camuro.co@gmail.com</a> or DM us on instagram <a href="https://www.instagram.com/thefilmpool/" alt="instagram">@thefilmpool</a> to checkout using PayPal.</p>
            </div>
            <br />
            <span>or</span>
            <br />
            <Link to="/products">Continue Shopping</Link>
          </div>
    </div>
    )
  }
  else {
    return (
      <div className="cart-empty">
        <h1>Your bags are empty</h1>
        <h3><Link to="/products">Add some products!</Link></h3>
      </div>
    )
  }
}

export default Cart;
