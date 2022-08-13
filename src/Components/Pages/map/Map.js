import React, { useEffect, useState } from "react";
import Pins from "./pins/Pins";
import landOne from "../../../images/land-1.png";
import landTwo from "../../../images/land-2.png";
import "./Map.css";
import Filter from "./filter/Filter";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Map = () => {
  const [data, setData] = useState([]);
  const [agricultural, setAgricltural] = useState(true);
  const [industrial, setIndstrial] = useState(true);
  const [residential, setResidential] = useState(true);
  const [commercial, setCommercial] = useState(true);
  const [other, setOther] = useState(true);
  const [all, setAll] = useState(true);
  useEffect(() => {
    fetch("https://marsad.almofawter.net/api/MapCities")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="img-container map-section">
        <div className="land">
          <img src={landOne} alt="land one" className="one" />
          <img src={landTwo} alt="land two" className="two" />

          {data.map((item, indexItem) => (
            <Pins
              key={indexItem}
              indexItem={indexItem}
              item={item}
              agricultural={agricultural}
              industrial={industrial}
              residential={residential}
              commercial={commercial}
              other={other}
            />
          ))}
        </div>
        <Filter
          setAgricltural={setAgricltural}
          setIndstrial={setIndstrial}
          setResidential={setResidential}
          setCommercial={setCommercial}
          setOther={setOther}
          agricultural={agricultural}
          industrial={industrial}
          residential={residential}
          commercial={commercial}
          other={other}
          all={all}
          setAll={setAll}
        />
      </div>
      <Footer />
    </>
  );
};

export default Map;
