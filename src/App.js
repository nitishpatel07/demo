import React from "react";
import "./App.css";
import { auth } from "./firebase";
import Header from "./header";
import HomePage from "./homepage";
import SignIn from "./signIn";
import { Switch, Route, Redirect } from "react-router-dom";
import moreDetail from "./moreDetail";
import "./App.css";

const Skin = () => (
  <div>
    <h1 className="page">SKIN PAGE</h1>
  </div>
);

const Hair = () => (
  <div>
    <h1 className="page">HAIR PAGE</h1>
  </div>
);

const Body = () => (
  <div>
    <h1 className="page">BODY PAGE</h1>
  </div>
);

const Wellness = () => (
  <div>
    <h1 className="page">WELLNESS PAGE</h1>
  </div>
);

const News = () => (
  <div>
    <h1 className="page">NEWS PAGE</h1>
  </div>
);

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
          <Route path="/skin" component={Skin} />
          <Route path="/hair" component={Hair} />
          <Route path="/body" component={Body} />
          <Route path="/wellness" component={Wellness} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
    );
  }
}

export default App;
