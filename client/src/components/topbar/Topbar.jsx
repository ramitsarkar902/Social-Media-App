import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { logoutCall } from "../../apiCalls";
import { useContext } from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    logoutCall(dispatch);
    history.push("/login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {/* implement darkmode in future */}
        <Link className="links" to="/">
          <span className="logo">DotBook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a friend or post"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <ExitToAppIcon onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
