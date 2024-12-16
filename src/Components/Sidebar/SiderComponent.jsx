import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";
import { useTheme } from '../../Context/ThemeContext';
import Logo from "../Logo/Logo";

const { Sider } = Layout;

function SiderComponent() {
  const { darkTheme, collapsed, setCollapsed } = useTheme();

  return (
    <Sider
      className={`sidebar transition-all duration-300
        ${darkTheme ? "bg-[#001529] text-white" : "bg-white text-black"}`}
      collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <div
        className={`flex items-center justify-center p-3
          ${darkTheme ? "bg-[#001529]" : "bg-[#004293]"}`}
      >
        <Button
          type="text"
          className={`text-lg transition-colors duration-300 ml-4 ${darkTheme ? "text-white" : "text-black"}`}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Logo collapsed={collapsed}/>
      </div>
      <MenuList/>
    </Sider>
  );
}

export default SiderComponent;
