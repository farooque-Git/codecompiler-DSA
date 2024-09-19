import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase";
import "./Header.css";
import logo from "../../image/logo.png";

const Header = () => {
  const [navIcon, setNavIcon] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || "User");
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUserName("");
      navigate("/");
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  const links = [{ id: 1, link: "/" }];

  return (
    <div className="header">
      <Link to="/codeeditor" style={{ textDecoration: "none" }}>
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo" />

          <span className="compiler">Code-Compiler</span>
        </div>
      </Link>

      <ul className="nav-links">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link === "/" ? "Home" : link}
            </Link>
          </li>
        ))}
        {isLoggedIn ? (
          <>
            <li>
              <span>{userName}</span>
            </li>
            <li>
              <Link to="/dashboard">
                {" "}
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>{" "}
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>

      <div onClick={() => setNavIcon(!navIcon)} className="menu-icon">
        {navIcon ? <FaTimes /> : <FaBars />}
      </div>

      {navIcon && (
        <ul className="mobile-menu">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                onClick={() => setNavIcon(!navIcon)}
                to={link}
                smooth
                duration={500}
              >
                {link === "/" ? "Home" : link}
              </Link>
            </li>
          ))}
          {isLoggedIn ? (
            <>
              <li>
                <span>{userName}</span>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
