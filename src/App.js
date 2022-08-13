import React, { useState } from 'react';
import './App.css';
import ContactUs from './Components/Pages/contact-us/ContactUs';
import JazanRegion from './Components/Pages/Jizan-region/JazanRegion';
import { Routes, Route } from 'react-router-dom';
import JazanSidebar from './Components/Pages/jazancomponents/JazanSidebar';
import MunicipalitiesSidebar from './Components/Pages/jazancomponents/MunicipalitiesSidebar';
import Home from './Components/Pages/home/Home';
import Map from './Components/Pages/map/Map';
import Login from './Components/DashBoard/login/LogIn';
import Provinces from './Components/Pages/jazancomponents/Provinces';
import CentersSidebar from './Components/Pages/jazancomponents/CentersSidebar';
import Dashboard from './Components/DashBoard/dashboard/Dashboard';
import MediaLibrary from './Components/Pages/Media-Library/MediaLibrary';

const App = () => {
  const [token, settoken] = useState('');

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/jazan_region/:id" element={<JazanRegion />} />
        <Route path="/jazan_region" element={<JazanRegion />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Media_Library" element={<MediaLibrary />} />
        <Route path="/jazan" element={<JazanSidebar />} />
        <Route path="/jazanMunici" element={<MunicipalitiesSidebar />} />
        <Route path="/provinces" element={<Provinces />} />
        <Route path="/centers" element={<CentersSidebar />} />
        <Route path="/login" element={<Login setToken={settoken} />} />
        <Route
          path="/cPanel/*"
          element={<Dashboard token={token} setToken={settoken} />}
        />
      </Routes>
    </div>
  );
};

export default App;
