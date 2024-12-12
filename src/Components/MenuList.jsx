import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { GiBlackBook, GiDatabase } from "react-icons/gi";
import { FaExclamationTriangle, FaChartPie } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoFile } from "react-icons/go";
import {
  TbSquareRoundedLetterVFilled,
  TbSquareRoundedLetterSFilled,
  TbSquareRoundedLetterAFilled,
  TbSquareRoundedLetterWFilled,
  TbSquareRoundedLetterMFilled,
  TbSquareRoundedLetterDFilled,
  TbSquareRoundedLetterBFilled,
  TbSquareRoundedLetterTFilled,
} from "react-icons/tb";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      className="menu-bar"
      mode="inline"
      style={{
        maxHeight: "calc(100vh - 64px)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Menu.SubMenu key="admin-home" icon={<FaHome />} title="Admin home">
        <Menu.Item key="action-items">Action Items</Menu.Item>
        <Menu.Item key="bcic-support-portal">BCIC Support Portal</Menu.Item>
        <Menu.Item key="calendar">Calendar</Menu.Item>
        <Menu.Item key="communication-log">Communication Log</Menu.Item>
        <Menu.Item key="manage-users">Manage Users</Menu.Item>
        <Menu.Item key="pto">RTO</Menu.Item>
        <Menu.SubMenu key="settings" title="Settings">
        <Menu.SubMenu key="import" title="Import">
        <Menu.Item key="locations">Locations</Menu.Item>
        <Menu.Item key="business-entities">Business Entities</Menu.Item>
        <Menu.Item key="employees">Employees</Menu.Item>
        <Menu.Item key="vendors">Vendors</Menu.Item>
        <Menu.Item key="clients">Clients</Menu.Item>
        <Menu.Item key="applications">Applications</Menu.Item>
        <Menu.Item key="hardware">Hardware</Menu.Item>
        <Menu.Item key="databases">Databases</Menu.Item>
        <Menu.Item key="equipment">Equipment</Menu.Item>
        <Menu.Item key="records">Records</Menu.Item>
        <Menu.Item key="teams">Teams</Menu.Item>
        <Menu.Item key="processes">Processes</Menu.Item>
        <Menu.Item key="process-dependencies">Process Dependencies</Menu.Item>
        <Menu.Item key="bias">BIAS</Menu.Item>
        <Menu.Item key="plans">Plans</Menu.Item>
        <Menu.Item key="plan-dependencies">Plan Dependencies</Menu.Item>
        <Menu.Item key="tasks">Tasks</Menu.Item>
        <Menu.Item key="approval-groups">Approval Groups</Menu.Item>
        <Menu.Item key="approvers">Approvers</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="action-item-aibrary">Action Item Library</Menu.Item>
        <Menu.Item key="exercise-objective-library">Exercise Objective Library</Menu.Item>
        <Menu.Item key="exercise-types">Exercise Types</Menu.Item>
        <Menu.Item key="incident-types">Incident Types</Menu.Item>
        <Menu.Item key="incident-assessment-question-library">Incident Assessment Question Library</Menu.Item>
        <Menu.Item key="location-types">Location Types</Menu.Item>
        <Menu.Item key="task-2">Risk Threat Library</Menu.Item>

        </Menu.SubMenu>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="organization"
        icon={<SiAwsorganizations />}
        title="Organization"
      >
        Organization
      </Menu.SubMenu>

      <Menu.SubMenu key="resources" icon={<GoPersonFill />} title="Resources">
        Resources
      </Menu.SubMenu>

      <Menu.SubMenu key="bia" icon={<IoIosSettings />} title="BIA">
        BIA
      </Menu.SubMenu>

      <Menu.SubMenu key="plans" icon={<GiBlackBook />} title="Plans">
        Plans
      </Menu.SubMenu>

      <Menu.SubMenu key="risks" icon={<FaExclamationTriangle />} title="Risks">
        Risks
      </Menu.SubMenu>

      <Menu.SubMenu
        key="exercises"
        icon={<ImCheckboxChecked />}
        title="Exercises"
      >
        Exercises
      </Menu.SubMenu>

      <Menu.SubMenu
        key="incidents"
        icon={<BsLightningFill />}
        title="Incidents"
      >
        Incidents
      </Menu.SubMenu>

      <Menu.SubMenu key="buisness" icon={<HomeOutlined />} title="Admin home">
        Buisness
      </Menu.SubMenu>

      <Menu.SubMenu key="technology" icon={<GiDatabase />} title="Technology">
        Technology
      </Menu.SubMenu>

      <Menu.SubMenu
        key="dashboard"
        icon={<AiFillDashboard />}
        title="Dashboard"
      >
        Dashboard
      </Menu.SubMenu>

      <Menu.SubMenu key="reports" icon={<FaChartPie />} title="Reports">
        Reports
      </Menu.SubMenu>

      <Menu.Item
        key="vendor-dependencies"
        icon={<TbSquareRoundedLetterVFilled />}
        title="Vendor Dependencies"
      >
        Vendor Dependencies
      </Menu.Item>

      <Menu.Item
        key="staff-dependencies"
        icon={<TbSquareRoundedLetterSFilled />}
        title="Staff Dependencies"
      >
        Staff Dependencies
      </Menu.Item>

      <Menu.Item
        key="activity-vital-record"
        icon={<TbSquareRoundedLetterAFilled />}
        title="Activity Vital Record"
      >
        Activity Vital Record
      </Menu.Item>

      <Menu.Item key="wfh" icon={<TbSquareRoundedLetterWFilled />} title="WFH">
        WFH
      </Menu.Item>

      <Menu.Item
        key="department-dependencies"
        icon={<TbSquareRoundedLetterDFilled />}
        title="Department Dependencies"
      >
        Department Dependencies
      </Menu.Item>

      <Menu.Item
        key="mtpd"
        icon={<TbSquareRoundedLetterMFilled />}
        title="MTPD"
      >
        MTPD
      </Menu.Item>

      <Menu.SubMenu
        key="bia-dependencies"
        icon={<TbSquareRoundedLetterBFilled />}
        title="BIA Dependencies"
      >
        BIA Dependencies
      </Menu.SubMenu>

      <Menu.SubMenu
        key="bia-equipment-dependencys"
        icon={<TbSquareRoundedLetterBFilled />}
        title="BIA Equipment Dependencys"
      >
        BIA Equipment Dependencys
      </Menu.SubMenu>

      <Menu.SubMenu
        key="tests"
        icon={<TbSquareRoundedLetterTFilled />}
        title="tests"
      >
        tests
      </Menu.SubMenu>

      <Menu.SubMenu key="new-tab" icon={<TiPlus />} title=" New Tab">
        New Tab
      </Menu.SubMenu>
      <div className="recent-item">
        <Menu.Item key="recent-item" icon={<GoFile />}>
          Recent Item
        </Menu.Item>
      </div>
      <div className="recent-item">
        <Menu.Item key="my-recycle-bin" icon={<RiDeleteBin6Line />}>
          My Recycle Bin
        </Menu.Item>
        {/* <Menu.Item key="my-theme" icon={<RiDeleteBin6Line  />}>My Theme</Menu.Item>  */}
      </div>
    </Menu>
  );
};

export default MenuList;
