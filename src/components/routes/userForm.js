import React from "react";
import "../Main.css";

const UserForm = ({ address, handleChange, handleSubmit }) => {
  return (
    <div className="Main-panel">
      <img className="Ballot-illustration" src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1601504623/Groupballot_qaq1qw.png" alt="ballot" />
      <h1>Are you ready for the 2020 elections?</h1>
      <h4>
        Being an informed voter means to be knowledgeable about the issues and positions of candidates when voting. Take our quiz to find out how prepared you are.
      </h4>
      <form className="Address-form" onSubmit={handleSubmit}>
        <input
          className="Address-input"
          placeholder="1234 1st Ave, New York, NY 10014"
          value={address}
          name="address"
          onChange={handleChange}
        />
        <div className="Start-button-div">
          <button className="Start-button" type="submit">
            Get Started
          </button>
          <p>We need your full address for results for your district.</p>
        </div>
      </form>
    </div>
  );
};
export default UserForm;
