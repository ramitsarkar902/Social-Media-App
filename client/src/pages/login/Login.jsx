import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">DotBook</h4>
          <span className="loginDesc">
            Connect with your friends and the world at large on DotBook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="text" placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
