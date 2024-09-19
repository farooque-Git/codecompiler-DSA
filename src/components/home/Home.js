import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <h2 className="content-main">
          Learn & become the<h1 className="content">Master in DSA</h1>
          <Link to="/register">
            {" "}
            <button className="toggle-btn">Create Account</button>
          </Link>
        </h2>
      </div>
      <div className="right-section">
        <img
          height="350px"
          src="https://miro.medium.com/v2/resize:fit:1358/1*JvZ-8tN5NDLIidYoywBikQ.gif"
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
