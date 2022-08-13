import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import ImgForCity from "../../../images/ggen.jpg";
import DataTable from "../data-table/DataTable";
import Home from "../home/Home";
import JazanInformation from "./JazanInformation/JazanInformation";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./JazanRegion.css";
import { useParams } from "react-router-dom";

const JazanRegion = () => {
  Chart.register(Tooltip, Title, ArcElement, Legend);
  const [chartNamePie, setChartNamePie] = useState([]);
  const [chartValuePie, setChartValuePie] = useState([]);
  const [scrollSection, setScrollSection] = useState(0);
  const { id } = useParams();

  const data = {
    datasets: [
      {
        data: chartValuePie,
        backgroundColor: ["#fae7b4", "#a9ddb5", "#b3aafd", "#e5e5e5"],
      },
    ],
    labels: chartNamePie,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        rtl: true,
        fullSize: true,
        labels: {
          boxWidth: 40,
          boxHeight: 15,
          pointStyle: "rect",
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
        res.data[0].statisticKeys.forEach((item) => {
          arrName.push(item.name);
          arrValue.push(item.value);
        });
        setChartNamePie([...arrName]);
        setChartValuePie([...arrValue]);
      });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".article");
    let scroll = 70;

    if (id < 4) {
      sections.forEach((section, ind) => {
        if (ind < +id - 1) scroll += +section.getBoundingClientRect().height;
      });

      document
        .querySelector(".white-box")
        .scrollTo({ top: scroll, behavior: "smooth" });
    } else {
      sections.forEach((section, ind) => {
        scroll += +section.getBoundingClientRect().height;
      });
      scroll += +document.querySelector(".city-info").getBoundingClientRect()
        .height;

      document
        .querySelector(".white-box")
        .scrollTo({ top: scroll, behavior: "smooth" });
    }
  }, [id]);

  return (
    <Fragment>
      <Navbar />
      <div className="img-container">
        <div className="white-box">
          <JazanInformation />
          <div className="city-info">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="city-details">
                    <div className="img-city">
                      <img src={ImgForCity} alt="jazan" />
                    </div>
                    <div className="text-city">
                      <h6>جيزان</h6>
                      <p>مساحة المحافظة : 479.5كم2</p>
                      <p>عدد التجمعات السكانية : 17</p>
                      <p>البلديات التابعة : جيزان</p>
                      <p>المراكز التابعة : جيزان - مركز الفطيحة</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="people-details">
                    <h4>احصائيات التجمعات السكانية</h4>
                    <div className="Circle-two">
                      <Pie
                        data={data}
                        options={options}
                        width={300}
                        height={440}
                      />
                    </div>
                    <div className="table-numbers">
                      <table>
                        <thead>
                          <tr>
                            <th className="name-head">البيان</th>
                            <th className="number-head">العدد</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-column="text-table">
                              إجمالي السكان الذكور (سعودين وغير سعوديين)
                            </td>
                            <td data-column="number-table">80835</td>
                          </tr>
                          <tr>
                            <td data-column="text-table">
                              إجمالي السكان الإناث (سعوديات وغير سعوديات)
                            </td>
                            <td data-column="number-table">53929</td>
                          </tr>
                          <tr>
                            <td data-column="text-table">
                              جملة السكان بالمحافظة
                            </td>
                            <td data-column="number-table">134764</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <DataTable /> */}
          <Home />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default JazanRegion;
