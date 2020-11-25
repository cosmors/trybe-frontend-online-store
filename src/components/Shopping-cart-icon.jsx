import React from 'react';
import { Link } from 'react-router-dom';
import cart from './img/shopping.png';

class ShoppingCartIcon extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shoppingcart">
        <img src={cart} alt="Shopping Cart"/>
      </Link>
    );
  };
  }
  
  export default ShoppingCartIcon;