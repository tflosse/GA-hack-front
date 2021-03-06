import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Main.css";

const UserForm = ({ address, handleChange, handleSubmit }) => {
  
  const [mobile, setMobile] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 722) {setMobile(false)}
        else setMobile(true)
    });

  return (
    <div className="Main-panel">
      <img className="Ballot-illustration" src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1601504623/Groupballot_qaq1qw.png" alt="ballot" />
      <img className={` ${mobile ? `hidden` : `Arrow-img`}`} src="https://i.imgur.com/0y56ZGS.png" alt="arrow" />
      <form className="Address-form" onSubmit={handleSubmit}>
        <h1>Are you ready for the 2020 Election?</h1>
        <h4>
          Being an informed voter means to be knowledgeable about the issues and positions of candidates when voting. Take our quiz to find out how prepared you are.
        </h4>
        <input
          className="Address-input"
          placeholder="1234 1st Ave, New York, NY 10014"
          value={address}
          name="address"
          onChange={handleChange}
        />
        <div className="Start-button-div">
          <Link to="/quiz">
            <button className="Start-button" type="submit" onClick={handleSubmit}>
              Get Started
            </button>
          </Link>
          <p>We need your address to get results for your district.</p>
        </div>
      </form>
    </div>
  );
};
export default UserForm;
