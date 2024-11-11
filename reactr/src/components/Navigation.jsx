import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/public/images/vite.svg" alt="Logo" />
      </div>
      <ul>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>

        <li>Location</li>
        <li>About</li>
        
        <NavLink className="NavLink" to="/weather">
          Weather
        </NavLink>
        <NavLink className="NavLink" to="/contact">
          Contact
        </NavLink>
      </ul>
      <NavLink className="dashboard" to="/dashboard">DashBoard</NavLink>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navigation;
