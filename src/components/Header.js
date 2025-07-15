import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/"> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart"> Cart</Link>
          </li>
          <button className="nav-item login-button">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
