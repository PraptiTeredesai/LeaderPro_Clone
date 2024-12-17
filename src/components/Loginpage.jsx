import React from "react";
import "./CSS/style.css"; // Adjust the path based on your folder structure

const Login = () => {

  // Function to show the alert when user clicks login
  const handleLogin = () => {
    alert("You are signed in!");
  };

  return (
    <div className="box">
      <div className="container">
        <div className="top">
          <span>Have an account?</span>
          <header>Login Now</header>
        </div>
        <div className="input-box">
          <input type="text" className="input" placeholder="UserName" />
          <i className="bx bx-user"></i>
        </div>

        <div className="input-box">
          <input type="password" className="input" placeholder="Password" />
          <i className="bx bx-lock-alt"></i>
        </div>

        <div className="input-box">
          {/* Trigger the handleLogin function on button click */}
          <input 
            type="submit" 
            className="submit" 
            value="Login" 
            onClick={handleLogin} 
          />
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <div className="two">
            {/* Replaced <a> with <button> for accessibility */}
            <button className="forgot-password-btn" onClick={() => alert("Forgot Password clicked")}>
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
