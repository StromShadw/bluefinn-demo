import logo from "../../assets/logo.png";

const Logo = ({ collapsed, darkTheme }) => {
  return (
    <div
      className={`logo 
      ${collapsed ? "collapsed" : ""}`}
    >
      {!collapsed && <img className={`${darkTheme ? "light-logo" : "dark-logo"}`} src={logo} alt="Logo" height="20px" width="200px" />}
    </div>
  );
};

export default Logo;
