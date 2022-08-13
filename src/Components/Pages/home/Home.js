import React, { useState, useEffect } from "react";
import imgPar_1 from "../../../images/gblack.png";
import imgPar_2 from "../../../images/gwhite.png";
import imgPar_3 from "../../../images/sblack.png";
import imgPar_4 from "../../../images/swhite.png";
import imgPar_5 from "../../../images/mblack.png";
import imgPar_6 from "../../../images/mwhite.png";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Home.css";

const Home = () => {
  Chart.register(Tooltip, Title, ArcElement, Legend);
  const [chartNameDoughnut, setChartNameDoughnut] = useState([]);
  const [chartValueDoughnut, setChartValueDoughnut] = useState([]);

  const data = {
    datasets: [
      {
        // data: [52475, 27245, 47542, 17987],
        data: chartValueDoughnut,
        backgroundColor: ["#f9a884", "#f8c67a", "#c38fc4", "#00deee"],
      },
    ],

    labels: chartNameDoughnut,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        rtl: true,
        fullSize: true,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          usePointStyle: true,
          pointStyle: "rectRounded",
          padding: 20,
        },
      },
    },
  };

  useEffect(() => {
    fetch("https://marsad.almofawter.net/api/Statistics")
      .then((res) => res.json())
      .then((res) => {
        const arrName = [];
        const arrValue = [];
        res.data[1].statisticKeys.forEach((item) => {
          arrName.push(item.name);
          arrValue.push(item.value);
        });
        setChartNameDoughnut([...arrName]);
        setChartValueDoughnut([...arrValue]);
      });
  }, []);

  return (
    <>
      {/* start chart section */}

      {/* <section className="chart-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>احصائيات عشوائية</h3>
            </div>
            <div className="col-md-6">
              <div className="Circle">
                <Doughnut
                  data={data}
                  options={options}
                  height={400}
                  width={336}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* start chart section */}

      {/* start our partners section */}

      <section className="our-partners" id="partners">
        <div className="container">
          <div className="heading">
            <h3>شركائنا</h3>
          </div>

          <div className="row">
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_1}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_2}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_3}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_4}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="partner_card">
                <a href="#">
                  <img
                    className="brand_partner"
                    src={imgPar_5}
                    alt="img partner"
                  />
                  <img
                    className="brand_partner"
                    src={imgPar_6}
                    alt="img partner"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end our partners section */}
    </>
  );
};

export default Home;
