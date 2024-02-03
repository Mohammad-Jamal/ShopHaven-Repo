import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({ handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your search shoes."
          className="search-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <span>
          <FiHeart className="nav-icons" />
        </span>
        <span>
          <AiOutlineShoppingCart className="nav-icons" />
        </span>
        <span>
          <AiOutlineUserAdd className="nav-icons" />
        </span>
      </div>
    </nav>
  );
}
export default Nav;
