import React from "react";
import Jazanimgone from "../../../images/ggen.jpg";
import Jazanimgtwo from "../../../images/gnat.jpg";
import Jazanimgthree from "../../../images/gold.jpg";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
const JazanSidebar = () => {
  return (
    <>
      <Navbar />
      <div className="img-container">
        <div className="white-box">
          <div className={`container`}>
            <div className="tab_head">
              <h2>منطقة جازان</h2>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <a href="/jazan_region#features">
                  <img
                    src={Jazanimgone}
                    alt="الملامح الاساسية"
                    className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
                  />
                </a>
                <p className="mb-3 mt-3 fs-5 text-center text-jazan">
                  الملامح الاساسية
                </p>
              </div>
              <div className="col-12 col-md-4 ">
                <a href="/jazan_region#properties">
                  <img
                    src={Jazanimgtwo}
                    alt="الخصائص الطبيعية"
                    className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
                  />
                </a>
                <p className="mb-3 mt-3 fs-5 text-center text-jazan">
                  الخصائص الطبيعية
                </p>
              </div>
              <div className="col-12 col-md-4">
                <a href="/jazan_region#history">
                  <img
                    src={Jazanimgthree}
                    alt="المعالم التاريخية"
                    className="img-fluid w-100 rounded rounded-4 shadow img-jazan"
                  />
                </a>
                <p className="mb-3 mt-3 fs-5 text-center text-jazan">
                  المعالم التاريخية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JazanSidebar;
