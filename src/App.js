import React from "react";

import "./App.css";
import {
  NavLink,
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";

import { connect } from "react-redux";

const test = function () {
  return <div>Day la trang test</div>;
};

const HatsPage = function (props) {
  console.log("trong hats page", props);
  return <div>This is hats all page</div>;
};

class App extends React.Component {
  /*
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
*/
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userAuth la:", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        console.log("user ref la:", userRef);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          //console.log(this.state); // neu muon console log thi phai su dung call back cua set state
        });
      } else {
        this.props.setCurrentUser(userAuth); // sign out set current user to null
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />
            }
          />

          <Route path="/test" component={test} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), // dispatching object
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
