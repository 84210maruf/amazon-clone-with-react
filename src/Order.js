import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

function Order({ order }) {
    console.log(order.data);
    return (
        <div className='order'>

            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}
            </p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                hiddenButton
              />
            ))}

            <CurrencyFormat renderText={(value) => (
                <h3 className='order__total'>Order Total : {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$ '}
            suffix={' USD'}
            />
            
        </div>
    )
}

export default Order;
