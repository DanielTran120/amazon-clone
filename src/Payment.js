import { formHelperTextClasses } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import {useStateValue} from './StateProvider'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"

function Payment() {
    const [{basket, user}, dispatch] = useStateValue()
    const stripe = useStripe();
    const element = useElements();

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to = '/checkout'>
                    {basket?.length} items
                    </Link>)
            </h1>
            <div className='payment_section'>

                <div className='payment_title'>
                    <h3>
                        Delivery addrress
                    </h3>
            
                </div>
                <div className="payment_address">
                    <p>
                        {user?.email}
                    </p>

                    <p>
                        1234 Avenue Cir.
                    </p>

                    <p>
                        Los Angeles, California
                    </p>
                </div>
            </div>

            <div className='payment_section'>
                <div className="payment_title">
                    <h3>
                        Review items and delivery
                    </h3>
                </div>

                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>
                        Payment Method
                    </h3>

                    <div className="payment_details">

                    </div>

                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Payment