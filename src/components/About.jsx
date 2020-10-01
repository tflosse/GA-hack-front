import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const About = ({address, handleChange, handleSubmit}) => {
    
    const [mobile, setMobile] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 722) {setMobile(false)}
        else setMobile(true)
    });
  
    return (
    <div>
        <h4>Vote informed.</h4>
        <div className={`${mobile ? `hidden`:`About-left`}`}>
            <h2>
                Our mission is to help voters get acquainted with offices,
                responsibilities, and candidates they’ll see on the ballot each Election
                day.{" "}
            </h2>
            <p>
                If you’ve voted before without spending serious time researching, you’re
                used to seeing a lot of unfamiliar names on your ballot. You may have a
                top-level candidate in mind, but it’s tough to have a well formed
                opinion about offices you might have never heard of!
                <br />
                Our quiz gives you a few tidbits and a direct link to each candidate’s
                campaign website so you can make the best possible choice.
            </p>
        </div>
        <div className={`${mobile ? `About-top`:`hidden`}`}>
            <h3>
                Our mission is to help voters get acquainted with offices,
                responsibilities, and candidates they’ll see on the ballot each Election
                day.{" "}
            </h3>
            <p>
                We tailor the quiz to your address to give you a few tidbits and a direct linka to each candidate’s
                campaign website so you can make the best possible choice.
            </p>
        </div>
        <div className="About-right">
            <p>Ready?
                <br />
                Enter your address below to get started.
            </p>
            <input
            className="Address-input"
            placeholder="1234 1st Ave, New York, NY 10014"
            value={address}
            name="address"
            onChange={handleChange}
            />
            <div className="Start-button-div">
            <Link to="/quiz">
                <button className="Start-button" type="submit">
                Get Started
                </button>
            </Link>
            <p className={`${mobile ? `hidden`:`Address-disclaimer`}`}>We need your address to get results for your district.</p>
            </div>
        </div>
    </div>
  );
};
export default About;
