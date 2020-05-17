import React from "react";

import "./App.css";
import {
  NavLink,
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";

const test = function() {
  return <div>Day la trang test</div>;
};

const HatsPage = function(props) {
  console.log("trong hats page", props);
  return <div>This is hats all page</div>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUpPage} />

        <Route path="/test" component={test} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
