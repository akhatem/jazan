import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import UsersPanel from "../pages/users-panel/UsersPanel";
import Media from "../pages/media/Media";
import Governorates from "../pages/governorates/Governorates";
import Centers from "../pages/centers/Centers";
import MapCities from "../pages/mapCities/MapCities";
import Statistics from "../pages/statistics/Statistics";
import Municipalities from "../pages/municipalities/Municipalities";
import VisitorInquiries from "../pages/visitor-inquiries/VisitorInquiries";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
const Dashboard = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("login");
    navigate("/login");
    setToken("");
  };

  return (
    <div className="dashboard-page">
      <header className="navbar navbar-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          مرصد جازان
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="عرض/إخفاء لوحة التنقل"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a
              className="nav-NavLink px-3 exit-btn"
              href="/"
              onClick={handleLogout}
            >
              تسجيل الخروج
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <NavLink
                  to="/cPanel/dashboardMain"
                  className="nav-item dashboard"
                >
                  <div className="nav-NavLink active" aria-current="page">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    مستخدمين اللوحة
                  </div>
                </NavLink>
                <NavLink to="/cPanel/Media" className="nav-item dashboard">
                  <div className="nav-NavLink">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    وسائط
                  </div>
                </NavLink>
                <NavLink to="/cPanel/Statistics" className="nav-item dashboard">
                  <div className="nav-NavLink">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    احصائيات
                  </div>
                </NavLink>
                <NavLink
                  to="/cPanel/Governorates"
                  className="nav-item dashboard"
                >
                  <div className="nav-NavLink">
                    <span
                      data-feather="shopping-cart"
                      className="align-text-bottom"
                    ></span>
                    محافظات
                  </div>
                </NavLink>
                <NavLink
                  to="/cPanel/Municipalities"
                  className="nav-item dashboard"
                >
                  <div className="nav-NavLink">
                    <span
                      data-feather="bar-chart-2"
                      className="align-text-bottom"
                    ></span>
                    البلديات
                  </div>
                </NavLink>
                <NavLink to="/cPanel/Centers" className="nav-item dashboard">
                  <div className="nav-NavLink">
                    <span
                      data-feather="shopping-cart"
                      className="align-text-bottom"
                    ></span>
                    مراكز
                  </div>
                </NavLink>
                <NavLink to="/cPanel/MapCities" className="nav-item dashboard">
                  <div className="nav-NavLink">
                    <span
                      data-feather="users"
                      className="align-text-bottom"
                    ></span>
                    خريطة جازان
                  </div>
                </NavLink>
                <NavLink
                  to="/cPanel/VisitorInquiries"
                  className="nav-item dashboard"
                >
                  <div className="nav-NavLink">
                    <span
                      data-feather="layers"
                      className="align-text-bottom"
                    ></span>
                    استفسارات الزوار
                  </div>
                </NavLink>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route
                path="/dashboardMain"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/dashboardMain" />
                  ) : (
                    <UsersPanel />
                  )
                }
              />
              <Route
                path="/Media"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/Media" />
                  ) : (
                    <Media />
                  )
                }
              />
              <Route
                path="/Governorates"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/Governorates" />
                  ) : (
                    <Governorates />
                  )
                }
              />
              <Route
                path="/Centers"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/Centers" />
                  ) : (
                    <Centers />
                  )
                }
              />
              <Route
                path="/MapCities"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/MapCities" />
                  ) : (
                    <MapCities />
                  )
                }
              />
              <Route
                path="/Statistics"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/Statistics" />
                  ) : (
                    <Statistics />
                  )
                }
              />
              <Route
                path="/Municipalities"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/Municipalities" />
                  ) : (
                    <Municipalities />
                  )
                }
              />
              <Route
                path="/VisitorInquiries"
                element={
                  !token ? (
                    <Navigate to="../../login" from="/VisitorInquiries" />
                  ) : (
                    <VisitorInquiries />
                  )
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
