import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { connect } from "react-redux";

import { toogleCart } from "../../redux/cart/cart.action";

const CartIcon = ({ toogleCart }) => {
  console.log("trong carticon:", toogleCart);
  return (
    <div className="cart-icon" onClick={toogleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogleCart: () => dispatch(toogleCart()),
  // return { type: "TOGGLE", payload: true };
  // dispatching object
});

export default connect(null, mapDispatchToProps)(CartIcon);

//  map dispatch to state
