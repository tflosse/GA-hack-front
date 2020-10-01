import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Nav = (props) => {

    const [nav, setNav] = useState("hidden")
    const [hamburger, setHamburger] = useState("shown")
    const handleShow = () => {
        setNav("shown")
        setHamburger("hidden")
    }
    const handleCollapse = () => {
        setNav("hidden")
        setHamburger("shown")
    }

  return (
    <div className="Nav-bar">
      <img
        className="Logo"
        src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1601498666/Logo_liyotz.png"
        alt="logo"
      />
      <button className={`Mobile-nav ${hamburger}`} onClick={handleShow}>
        <span className="material-icons Nav-button">menu</span>{" "}
      </button>
      <div className={`Nav-items ${nav}`}>
        <button className="Mobile-nav" onClick={handleCollapse}>
            <span className="material-icons Nav-button">close</span>{" "}
        </button>
          <Link to="/about" className="Nav-links">About</Link>
          <Link to="/current" className="Nav-links">Current Officials</Link>
      </div>
    </div>
  );
};
export default Nav;
