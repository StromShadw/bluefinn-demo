import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggleThemeButton = ( {darkTheme, toggleTheme} ) => {
  return (
    <div className="toggle-theme-btn">
      <Button
        onClick={toggleTheme}
        type="text"
        className={`btn ${darkTheme ? "dark-mode-button" : "light-mode-button"}`}
      >
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
