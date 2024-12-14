import { Button, Layout, theme } from "antd";
import MenuList from "./Components/Sidebar/MenuList";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "./ToggleThemeButton";
import Logo from "./Components/Logo/Logo";
import BusinessEntitiesPage from "./pages/organization/buisness entities/BusinessEntitiesPage";
import sideLogo from './assets/sidelogo.png';
import { IoAppsSharp, IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsQuestionLg } from "react-icons/bs";

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={darkTheme ? "dark-theme" : "light-theme"}>
      <Sider
        style={{
          backgroundColor: darkTheme ? "#001529" : "#004293",
          color: darkTheme ? "#ffffff" : "#000000",
        }}
        theme={darkTheme ? "dark" : "light"}
        collapsed={collapsed}
        collapsible
        trigger={null}
        breakpoint="lg"
        collapsedWidth="80"
        onBreakpoint={(broken) => setCollapsed(broken)}
        className="sidebar"
      >
        <div className={`logo-toggle ${darkTheme ? 'logo-toggle-dark' : 'logo-toggle-light'}`}>
          <Button
            type="text"
            className={`toggle ${
              darkTheme ? "dark-mode-button" : "light-mode-button"
            }`}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Logo collapsed={collapsed} darkTheme={darkTheme} />
        </div>
        <MenuList darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header
          className={`header-upper ${darkTheme ? "dark-mode" : "light-mode"}`}
          style={{
            padding: 0,
            backgroundColor: darkTheme ? "#001529" : "#004293",
            color: darkTheme ? "#004293" : "#000000",
          }}
        >
          <div className="logo-name">
            <img src={sideLogo} alt="BC in the cloud" />
            <span className="logo-side-name">BC in the cloud</span>
            <span className="logo-side-icon"><IoAppsSharp /></span>
          </div>
          <div className="side-header">
            <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <button className="notification"><IoIosNotifications /></button>
            <button className="search"><IoSearch /></button>
            <button className="question"><BsQuestionLg /></button>
            <button className="profile"><CgProfile /></button>
          </div>
        </Header>
        <BusinessEntitiesPage />
      </Layout>
    </Layout>
  );
}

export default App;
