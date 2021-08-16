import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import "./SideBar.css";

function SideBar() {
  return (
    <nav className="container">
      <div className="link-wrap">
        <Link className="Link" exact="true" to="/">
          <img src="assets/pfp.png"/>
        </Link>
        <Link className="Link" to="/navigation">
          <img src ="assets/direction.png" />
        </Link>
        <Link className="Link" to="/home">
            <FaHome />
        </Link>
        <Link className="Link" to="/media">
          <RiMovieLine />
        </Link>
        <Link className="Link" to="/logout">
          < FiLogOut />
        </Link>
      </div>
    </nav>
  );
}

export default SideBar;