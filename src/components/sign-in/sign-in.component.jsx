import React from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" }); // empty form
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target; // event.target la input
    console.log(event.target);
    this.setState({ [name]: value });
  };

  test = (event) => {
    event.preventDefault();
    alert("what");
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          {/*  <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
          /> */}
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
            label="Email"
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            required
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
