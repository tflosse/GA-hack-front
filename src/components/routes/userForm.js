import React from "react";
import "../Main.css";

const UserForm = ({ address, handleChange, handleSubmit }) => {
  return (
    <div className="Main-panel">
      <img className="Ballot-illustration" src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1601504623/Groupballot_qaq1qw.png" alt="ballot" />
      <h1>Are you ready for the 2020 elections?</h1>
      <h4>
        Take out quiz to find out your blind spots and get informed.
        <br />
        You're one step closer to being ready in the booth.
      </h4>
      <form className="Address-form" onSubmit={handleSubmit}>
        <input
          className="Address-input"
          placeholder="Enter your address here"
          value={address}
          name="address"
          onChange={handleChange}
        />
        <p>
          {" "}
          This is just to give you information specific to your neighborhood. No
          data will be collected!
        </p>
        <div className="Start-button-div">
          <button className="Start-button" type="submit">
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserForm;
