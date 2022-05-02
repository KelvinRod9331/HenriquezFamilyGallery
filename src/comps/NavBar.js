import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    auth.logout();
  };
  const handleMenuBar = (e) => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (showMenu) {
      document.getElementById("nav").classList.add("change");
    } else {
      document.getElementById("nav").classList.remove("change");
    }
  }, [showMenu]);

  return (
    <div className="nav-wrapper">
      <div
        style={{
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={handleMenuBar}
        className="menu-icon"
        id="nav"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      {showMenu && (
        <div className="menu-items">
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <a href="" onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
