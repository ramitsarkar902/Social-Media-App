import "./register.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <span>Register comrade</span>
        </div>
        <div className="registerBottom">
          <form onSubmit={handleSubmit} className="registerBox">
            <input
              type="text"
              required
              ref={username}
              className="registerInput"
              placeholder="User Name"
            />
            <input
              type="text"
              required
              ref={email}
              className="registerInput"
              placeholder="Email"
            />
            <input
              type="password"
              required
              ref={password}
              className="registerInput"
              placeholder="Password"
            />
            <input
              type="password"
              required
              ref={passwordAgain}
              className="registerInput"
              placeholder="Type the Password Again"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button onClick={handleLogin} className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
