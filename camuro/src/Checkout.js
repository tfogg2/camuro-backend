import React from 'react'
import axios from 'axios'
import $ from "jquery"
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert("Thanks for shopping with us! We'll send you a confirmation email once your item is shipped.");
};

const errorPayment = data => {
  alert('Payment Error');
  alert(data)
};

const onToken = (amount, description) => (token, args) =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount),
      metadata: args
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount}) =>
  <StripeCheckout
    image="https://stripe.com/img/documentation/checkout/marketplace.png"
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    billingAddress={true}
    shippingAddress={true}
  />

export default Checkout;
