import React, { Component } from "react";
import FormInput from "./form input/FormInput";
import "../styles/SignIn.scss";
import CustomButton from "./custom button/CustomButton";
import { auth, signInWithGoogle } from "../firebase/Firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    const{email, password}= this.state
    event.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error);
      
    }
    this.setState({ email: "", password: "" });
    
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
