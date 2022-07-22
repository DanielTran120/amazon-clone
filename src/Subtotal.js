import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useNavigate } from 'react-router-dom';
function Subtotal() {
  const history = useNavigate();
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (

          //value here gets passed into lower value
            <>
            <p>
                Subtotal ({basket.length}) items: <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox'/>
                This order contains a gift
            </small>
            </>

        )}

        decimalScale = {2}
        value = {getBasketTotal(basket)} //do yourself
        displayType = {'text'}
        thousandSeparator = {true}
        prefix = {"$"}
        />

        <button onClick={e => history('/payment')}> 
          Proceed to Checkout
        </button>

    </div>
  )
}

export default Subtotal