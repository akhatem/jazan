import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import Media from "./Media";
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
