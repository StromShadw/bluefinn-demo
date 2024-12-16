import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from './Context/ThemeContext.jsx';
import HeaderComponent from './Components/Header/HeaderComponent';
import SiderComponent from './Components/Sidebar/SiderComponent';
import Login from './pages/loginPage/Login.jsx'
import BusinessEntitiesPage from './pages/organization/buisness entities/BusinessEntitiesPage';
import Employees from "./pages/organization/Employees/Employees.jsx";
import Location from "./pages/organization/Locations/Locations.jsx";
import LocationType from './pages/organization/LocationType/LocationType.jsx';
import TrainingAwareness from "./pages/organization/Training&Awareness/TrainingAwareness.jsx";


function App() {
  const { darkTheme } = useTheme()

  return (
    <Router>
      <Layout className={`min-h-screen ${darkTheme ? 'bg-gray-900' : 'bg-white'}`}>
        <SiderComponent
        />
        <Layout className="dark:bg-dark">
          <HeaderComponent
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/business-entities" element={<BusinessEntitiesPage />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/location-type" element={<LocationType />} />
            <Route path="/training-awareness" element={<TrainingAwareness />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
