import React from "react";
import './Cehckout.css';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  
  const [{basket,user}, dispatch] = useStateValue();
  
  
  return (
    <div className="checkout">
      <div className="checkout__left">

        <img
          className="checkout__ad"
          src={require("./images/amazon_banner.jpg").default}
        />

        <div>
          <h5>Hallow,  {user? user.email:'you need to sign In'}</h5>
          
          <h2 className="checkout__title">Your Shopping Busket
          </h2>
        </div>

        <div className='checkout__products'>

           {basket.map( item => (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
           ))}

        </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>

  );
}

export default Checkout;
