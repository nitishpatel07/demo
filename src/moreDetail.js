import React from "react";
import Datepicker from "./datePicker";
import "./moreDetail.scss";
import { Link } from "react-router-dom";

class moreDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      email: "",
      fullName: "",
      Password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ mobile: "", email: "", fullName: "", Password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="detail">
        <div className="detail-box">
          <div className="heading">
            <span className="signin">A few more details</span>
            <Link className="cross" to="/">
              &#10006;
            </Link>
          </div>

          <form className="detail-form" onSubmit={this.handleSubmit}>
            <label className="label-1">Mobile Number</label>
            <input
              className="form-value"
              type="text"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              required
            />
            <label className="label-2">Email</label>
            <input
              className="form-value"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label className="label-3">Full Name</label>
            <input
              className="form-value"
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
              required
            />
            <label className="label-4">Password</label>
            <input
              className="form-value"
              name="Password"
              type="password"
              value={this.state.Password}
              onChange={this.handleChange}
              required
            />
            <label className="label-5">Date of Birth</label>
            <Datepicker />

            <Link to="/">
              <button class="button" type="submit">
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default moreDetail;
