import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Nav = (props) => {

    const [nav, setNav] = useState("hidden")
    const [hamburger, setHamburger] = useState("default")
    const handleShow = () => {
        setNav("shown")
        setHamburger("hidden")
    }
    const handleCollapse = () => {
        setNav("hidden")
        setHamburger("default")
    }

    const [mobile, setMobile] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 722) {setMobile(false)}
        else setMobile(true)
    });

  return (
    <div className="Nav-bar">
        <Link to="/">
            <img
                className="Logo"
                src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1601498666/Logo_liyotz.png"
                alt="logo"
            />
        </Link>
      {/* <img className="Arrow" src="https://i.imgur.com/0y56ZGS.png" alt="Arrow" /> */}
      <button className={`Mobile-nav ${hamburger}`} onClick={handleShow}>
        <span className="material-icons Nav-button">menu</span>{" "}
      </button>
      <div className={` ${mobile ? `${nav}` : `Nav-items`}`}>
        <button className="Mobile-close" onClick={handleCollapse}>
            <span className="material-icons Nav-button">close</span>{" "}
        </button>
          <Link to="/about" className="Nav-links">About</Link>
          <Link to="/current" className="Nav-links" id="current">Current Officials</Link>
      </div>
    </div>
  );
}

export default Nav;
