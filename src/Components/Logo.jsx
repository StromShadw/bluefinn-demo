import logo from "../assets/logo.png";

const Logo = ({ collapsed }) => {
  return (
    <div className={`logo ${collapsed ? "collapsed" : ""}`}>
      {!collapsed && <img src={logo} alt="Logo" height="20px" width="100px"/>}
      {collapsed && <img src={logo} alt="Logo" height="20px" />}
    </div>
  );
};

export default Logo;
