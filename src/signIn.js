import React from "react";
import { signInWithGoogle, signInWithFacebook } from "./firebase";
import firebase from "./firebase";
import "./signin.scss";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignInSubmit();
          console.log("captcha verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();

    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("sms not sent");
      });
  };

  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("user is verified");

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  render() {
    return (
      <div className="signIn">
        <div className="signIn-box">
          <div className="heading">
            <span className="signin">SIGN IN</span>
            <Link className="cross" to="/">
              &#10006;
            </Link>
          </div>

          <form className="number" onSubmit={this.onSignInSubmit}>
            <div id="sign-in-button" />
            <label className="label">Mobile Number</label>
            <input
              className="form-value"
              type="text"
              name="mobile"
              required
              onChange={this.handleChange}
            />
            <button className="button" type="submit">
              Submit
            </button>
          </form>

          <form className="number" onSubmit={this.onSubmitOTP}>
            <div className="otp-input">
              <input
                className="form-value"
                type="text"
                name="otp"
                required
                onChange={this.handleChange}
              />
            </div>

            <button className="button" type="submit">
              Submit otp
            </button>
          </form>
          <label className="label-continue">or continue with</label>
          <button className="button-social" onClick={signInWithGoogle}>
            google
          </button>
          <button className="button-social" onClick={signInWithFacebook}>
            facebook
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
