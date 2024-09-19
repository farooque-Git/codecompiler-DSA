import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const containerStyle = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    color: "black",
    marginTop: "50px",
  };

  const subheadingStyle = {
    fontSize: "30px",
    color: "red",
    marginTop: "-50px",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#6674CC",
    color: "#ffffff",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    marginTop: "2rem",
    transition: "background-color 0.2s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1e40af",
  };

  const imageStyle = {
    height: "150px",
    marginTop: "2rem",
  };

  return (
    <div style={containerStyle}>
      <h4 style={headingStyle}>404 Error</h4>
      <h6 style={subheadingStyle}>Uh oh! This page is lost in space!</h6>
      <img
        style={imageStyle}
        src="https://img1.picmix.com/output/stamp/normal/3/3/8/9/2379833_beb75.gif"
        alt="Error image"
      />
      <button
        onClick={handleGoBack}
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6674CC")}
      >
        Start again!
      </button>
    </div>
  );
};

export default Error;
