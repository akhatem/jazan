import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
const MunicipalitiesSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const government = async () => {
      const res = await fetch(
        "https://marsad.almofawter.net/api/Municipalities"
      );
      const { data } = await res.json();
      setData(data);
    };
    government();
  }, []);
  return (
    <>
      <Navbar />
      <div className="img-container">
        <div className="white-box">
          <div className="container">
            <div className="tab_head-ProvincesTab">
              <h2>بلديات منطقة جازان</h2>
            </div>
            <div className="d-flex flex-wrap tab-grid">
              {data.map((item, ind) => (
                <span className="py-2 text-center" key={ind}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MunicipalitiesSidebar;
