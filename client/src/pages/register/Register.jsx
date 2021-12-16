import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <span>Hello</span>
        </div>
        <div className="registerBottom">
          <form className="registerBox">
            <input
              type="text"
              required
              className="registerInput"
              placeholder="Email"
            />
            <input
              type="password"
              required
              className="registerInput"
              placeholder="Password"
            />
            <input
              type="password"
              required
              className="registerInput"
              placeholder="Type the Password Again"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
