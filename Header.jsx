import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="navbar">
      <h2>AleeStore</h2>

      <ul id="list-item">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </header>
  );
}

export default Header;