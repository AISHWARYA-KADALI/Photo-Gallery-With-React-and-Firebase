import "./Sidebar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Finacular</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home dash"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <i class="fa fa-pie-chart" aria-hidden="true"></i>
          <a href="#">Assets</a>
        </div>
        <div className="sidebar__link">
                  <i class="fa fa-signal" aria-hidden="true"></i>
          <a href="#">Tracker</a>
        </div>
        <div className="sidebar__link">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
          <a href="#">Planning and Advisory</a>
        </div>
        <div className="sidebar__link pic">
                  <img width="40" src={avatar} alt="avatar" />
                  <a href="#">Vandana M</a>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
