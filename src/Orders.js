/* eslint-disable array-callback-return */
import React from 'react';
import './Orders.css';
import {Link} from "react-router-dom";

function Orders() {
    return (
        <div className='orders'>
            <h1>Your Orders placed successfully !!!</h1>
            <button type='button' onClick={<Link to="/"></Link>}> Continue Shopping!!</button>
        </div>
    )
}

export default Orders
