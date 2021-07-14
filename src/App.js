import React from "react";
import "./App.css";
import { auth } from "./firebase";
import Header from "./header";
import HomePage from "./homepage";
import SignIn from "./signIn";
import { Switch, Route, Redirect } from "react-router-dom";
import moreDetail from "./moreDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signin"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/moredetail" />
              ) : (
                <SignIn />
              )
            }
          />
          <Route path="/moredetail" component={moreDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
