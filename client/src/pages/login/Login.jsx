import React, { useRef, useContext, useEffect } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
/* import axios from "axios"; */
import { useHistory } from "react-router-dom";
function Login() {
  let email = useRef();
  let password = useRef();
  const history = useHistory();

  const { isFetching, user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  /* useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.post("/auth/login", userCredential);
      console.log(res.data);
    };
    fetchUser();
  }, []); */

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h4 className="loginLogo">DotBook</h4>
          <span className="loginDesc">
            Connect with your friends and the world at large on DotBook.
          </span>
        </div>
        <div className="loginBottom">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              minLength={3}
              ref={password}
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            {/* need to add forget pw logic in api */}
            <button onClick={handleRegister} className="loginRegisterButton">
              Create a new Account{/* need to add new uder register logic */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
