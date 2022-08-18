import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import Media from "./Media";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./MediaLibrary.css";

const MediaLibrary = () => {
  const [media, setMedia] = useState([
    "images/1.jpg",
    "images/1.jpg",
    "images/1.jpg",
    "images/1.jpg",
    "images/1.jpg",
    "images/1.jpg",
  ]);

  // useEffect(() => {
  //   fetch("https://marsad.almofawter.net/api/media")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const arrName = [];
  //       const arrValue = [];
  //       res.data[1].statisticKeys.forEach((item) => {
  //         arrName.push(item.name);
  //         arrValue.push(item.value);
  //       });
  //       setChartNameDoughnut([...arrName]);
  //       setChartValueDoughnut([...arrValue]);
  //     });
  // }, []);
  return (
    <>
      <Navbar />
      <div className="img-container">
        <div className="white-box">
          <h2 className="article_title">زيارة المرصد لأبو عريش</h2>
          <div className="media_container">
            {media.map((item, ind) => (
              <Media item={item} key={ind} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MediaLibrary;
