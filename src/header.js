import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { auth } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = ({ currentUser }) => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="header">
      <div data-aos="fade-right" className="header-left">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div
        className={isMobile ? "header-right-mobile-box" : ""}
        onClick={() => setisMobile(false)}
      >
        <div
          className={isMobile ? "header-right-mobile" : "header-right"}
          onClick={() => setisMobile(false)}
        >
          <Link className="options" to="/skin">
            SKIN
          </Link>
          <Link className="options" to="/hair">
            HAIR
          </Link>
          <Link className="options" to="/body">
            BODY
          </Link>
          <Link className="options" to="/wellness">
            WELLNESS
          </Link>
          <Link className="options" to="/news">
            NEWS
          </Link>
          {currentUser ? (
            <div className="signin" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="signin" to="/signin">
              <FontAwesomeIcon className="icon" icon={faUser} size="sm" />
              SIGN IN
            </Link>
          )}
          <Link className="signin" to="">
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="1x" />
            SUBSCRIBE
          </Link>
        </div>
      </div>

      <button
        className="mobile-menu-icon"
        onClick={() => setisMobile(!isMobile)}
      >
        {isMobile ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </div>
  );
};

export default Header;
