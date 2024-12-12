import { Button, Layout, theme } from "antd";
import Logo from "./Components/Logo";
import MenuList from "./Components/MenuList";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "./Components/ToggleThemeButton";

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
    <>
      <Layout className={darkTheme ? "dark-theme" : "light-theme"}>
        <Sider
          theme={darkTheme ? "dark" : "light"}
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="sidebar"
        >
          <div className="logo-toggle">
            <Button
              type="text"
              className="toggle"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Logo collapsed={collapsed} />
          </div>
          <MenuList darkTheme={darkTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, backgroundColor: "white" }}>
            <ToggleThemeButton
              darkTheme={darkTheme}
              toggleTheme={toggleTheme}
            />
          </Header>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
