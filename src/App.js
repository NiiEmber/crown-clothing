import React, { Component } from "react";
import HomePage from "./components/pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/pages/shop/Shop";
import "./App.css";
import Header from "./components/Header";
import SignInSignUp from "./components/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        
      }
      else{this.setState({currentUser: userAuth})}
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
