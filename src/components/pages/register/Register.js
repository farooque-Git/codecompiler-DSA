import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import Input from "./input";
import "./Register.css";

const Register = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password, name, role);
        setIsRegistering(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="image-container">
        <img
           src="https://miro.medium.com/v2/resize:fit:1000/0*jxUH3Cwd-jlCnf3d"
          alt="register"
        />
      </div>
      <div className="register-container">
        {user && <Navigate to={"/"} replace={true} />}
        <main className="form-card">
          <div className="text-center">
            <h3>Create an Account</h3>
          </div>
          <form onSubmit={onSubmit}>
            <label className="input-label">Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isRegistering}
            />
            <label className="input-label">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isRegistering}
            />
            <label className="input-label">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isRegistering}
            />
            <label className="input-label">Confirm Password</label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isRegistering}
            />
            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}
            <button
              type="submit"
              disabled={isRegistering}
              className={`submit-btn ${isRegistering ? "disabled" : ""}`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to={"/"} className="text-sm hover:underline">
                Continue
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;
