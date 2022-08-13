import React, { useState } from 'react';
import Logo1 from '../../../images/logo1@2x.png';
import Logo2 from '../../../images/logo2@2x.png';
import './Navbar.css';
import SideBar from './SideBar';
import Backdrop from './Backdrop';
import { NavLink } from 'react-router-dom';
import JazanTab from '../Jazan-tab/JazanTab';
import 'bootstrap/js/dist/tab';
import ProvincesTab from '../Jazan-tab/ProvincesTab';
import Municipalities from '../Jazan-tab/Municipalities';
import CentersTab from '../Jazan-tab/CentersTab';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, updateIsOpen] = useState(false);
  const toggleSidebar = () => {
    updateIsOpen((prevState) => !prevState);
  };
  return (
    <div className="navbar-background">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-8 col-lg-6 col-xl-4">
            <div className="d-flex justify-content-center">
              <img src={Logo2} alt="logo1" className="img-fluid logo-one" />
              <img src={Logo1} alt="logo2" className="img-fluid logo-two" />
            </div>
          </div>
          <div className="col-4 col-lg-6 col-xl-8">
            <ul className="itemsNavbar d-none d-xl-flex mb-0 justify-content-start">
              <li className="nav-item dropdown dropdown-one me-1 ">
                <NavLink to="/" className=" dropdown-toggle">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item dropdown dropdown-one me-1">
                <NavLink to="/jazan_region" className=" dropdown-toggle">
                  منطقة جازان
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-two">
                  <div
                    className="d-flex nav-tabs tabsNavbar text-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-NavLink active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        منطقة جازان
                      </span>
                    </li>
                    <li className="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-NavLink"
                        id="provinces-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#provinces-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="provinces-tab-pane"
                        aria-selected="false"
                      >
                        المحافظات
                      </span>
                    </li>
                  </div>
                  <div className="tab-content mt-2" id="myTabContent">
                    <JazanTab
                      classess={'tab-pane fade show active'}
                      id="home-tab-pane"
                      role="tabpanel"
                      arialabelledby="home-tab"
                      tabIndex="0"
                    />
                    <ProvincesTab
                      classess={'tab-pane fade'}
                      id="provinces-tab-pane"
                      role="tabpanel"
                      arialabelledby="provinces-tab"
                      tabIndex="0"
                    />
                  </div>
                </ul>
              </li>

              <li className="me-1 dropdown dropdown-two">
                <span className="dropdown-toggle">المراصد الحضرية</span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <span className="dropdown-item">تاريخ المراصد</span>
                  </li>
                  <li>
                    <span className="dropdown-item">المراصد بالمملكة</span>
                  </li>
                  <li>
                    <span className="dropdown-item">مرصد جازان</span>
                  </li>
                  <li>
                    <span className="dropdown-item">الاطار العام للمؤشرات</span>
                  </li>
                </ul>
              </li>
              <li className="me-1 dropdown dropdown-two">
                <span className=" dropdown-toggle">الفريق</span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <span className="dropdown-item">المجلس الاعلى</span>
                  </li>
                  <li>
                    <span className="dropdown-item">فريق العمل</span>
                  </li>
                  <li>
                    <Link to="/jazan_region/4">
                      <span className="dropdown-item">شركائنا</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="me-1 dropdown dropdown-two">
                <span className="dropdown-toggle " role="button">
                  المكتبة الاعلامية
                </span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <NavLink to="/Media_Library">
                    <span className="dropdown-item">
                      زيارة المرصد لأبو عريش
                    </span>
                  </NavLink>
                </ul>
              </li>
              <li className="me-1">التقارير</li>
              <li className="me-1">اخبار المرصد</li>
              <li className="me-1 last-item">
                <NavLink to="/contactus" className="last">
                  اتصل بنا{' '}
                </NavLink>
              </li>
            </ul>
            <button
              className="d-block d-xl-none m-auto button"
              onClick={toggleSidebar}
            >
              {isOpen === true ? (
                <i className="fa-solid fa-xmark fs-2"></i>
              ) : (
                <i className="fa-solid fa-align-justify fs-2"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <SideBar isOpen={isOpen} />
      <Backdrop toggle={() => toggleSidebar()} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
