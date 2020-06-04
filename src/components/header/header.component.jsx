import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"; // syntax for importing SVG
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./header.scss";

// header nhan props currentUser tu reducer
const Header = ({ currentUser, cartDropDown }) => {
  //const [cartDropDown, setCartDropDown] = useState(false);

  console.log("header dang duoc render");
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}

        {/* <CartIcon toogleDropDown={() => setCartDropDown(!cartDropDown)} /> */}
        <CartIcon />
      </div>

      {/*  <CartDropdown shoudDisplay={cartDropDown} /> */}
      {cartDropDown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartDropDown: state.cart.cartDropDown,
});

export default connect(mapStateToProps)(Header);
