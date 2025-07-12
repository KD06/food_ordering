import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
