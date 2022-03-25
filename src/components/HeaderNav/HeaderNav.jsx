import "./HeaderNav.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function HeaderHav() {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="nav__left">
            <Link to="/home" className="nav__link">
              <img className="nav__logo" src={logo} alt="company logo" />
            </Link>
          </div>
          <div className="nav__right">
            <NavLink
              to="/home"
              className="nav__link link"
              activeClassName="nav__link--highlight"
            >
              Home
            </NavLink>
            <NavLink
              to="/catteries"
              className="nav__link link"
              activeClassName="nav__link--highlight"
            >
              Listings
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderHav;
