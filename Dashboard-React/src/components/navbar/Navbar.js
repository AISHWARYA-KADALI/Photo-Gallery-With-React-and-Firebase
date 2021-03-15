import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
                  <i class="fa fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#">
                  <i class="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a href="#!">
             <button class="button"><i class="fa fa-bolt" aria-hidden="true"></i> Actions</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
