import React, { useState, useEffect } from "react";
import Datepicker from "./datePicker";
import "./moreDetail.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const MoreDetail = () => {
  const [userData, setData] = useState({
    mobile: "",
    email: "",
    fullName: "",
    Password: "",
  });

  const { mobile, email, fullName, Password } = userData;

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ mobile: "", email: "", fullName: "", Password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ [name]: value });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="detail">
      <div data-aos="fade-left" className="detail-box">
        <div className="heading">
          <span className="signin">A few more details</span>
          <Link className="cross" to="/">
            &#10006;
          </Link>
        </div>

        <form className="detail-form" onSubmit={handleSubmit}>
          <label className="label-1">Mobile Number</label>
          <input
            className="form-value"
            type="text"
            name="mobile"
            value={mobile}
            onChange={handleChange}
            required
          />
          <label className="label-2">Email</label>
          <input
            className="form-value"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label className="label-3">Full Name</label>
          <input
            className="form-value"
            name="fullName"
            type="text"
            value={fullName}
            onChange={handleChange}
            required
          />
          <label className="label-4">Password</label>
          <input
            className="form-value"
            name="Password"
            type="password"
            value={Password}
            onChange={handleChange}
            required
          />
          <label className="label-5">Date of Birth</label>
          <Datepicker />

          <Link to="/">
            <button className="button" type="submit">
              Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MoreDetail;
