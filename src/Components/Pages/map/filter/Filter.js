import React from "react";
import "./Filter.css";

const Filter = ({
  setAgricltural,
  setIndstrial,
  setResidential,
  setCommercial,
  setOther,
  agricultural,
  industrial,
  residential,
  commercial,
  other,
  all,
  setAll,
}) => {
  const handleAgr = () => {
    setAgricltural(true);
    setIndstrial(false);
    setResidential(false);
    setCommercial(false);
    setOther(false);
    setAll(false);
  };
  const handleInd = () => {
    setAgricltural(false);
    setIndstrial(true);
    setResidential(false);
    setCommercial(false);
    setOther(false);
    setAll(false);
  };
  const handleRes = () => {
    setAgricltural(false);
    setIndstrial(false);
    setResidential(true);
    setCommercial(false);
    setOther(false);
    setAll(false);
  };
  const handleCom = () => {
    setAgricltural(false);
    setIndstrial(false);
    setResidential(false);
    setCommercial(true);
    setOther(false);
    setAll(false);
  };
  const handleOth = () => {
    setAgricltural(false);
    setIndstrial(false);
    setResidential(false);
    setCommercial(false);
    setOther(true);
    setAll(false);
  };
  const handleAll = () => {
    setAgricltural(true);
    setIndstrial(true);
    setResidential(true);
    setCommercial(true);
    setOther(true);
    setAll(true);
  };

  return (
    <div>
      <div className="filter">
        <h5>المؤشرات</h5>
        <ul>
          <li className={`tab ${all ? "active" : ""}`} onClick={handleAll}>
            الكل
          </li>
          <li
            className={`tab ${!all && agricultural ? "active" : ""}`}
            onClick={handleAgr}
          >
            زراعى
          </li>
          <li
            className={`tab ${!all && residential ? "active" : ""}`}
            onClick={handleRes}
          >
            سكنى
          </li>
          <li
            className={`tab ${!all && commercial ? "active" : ""}`}
            onClick={handleCom}
          >
            تجارى
          </li>
          <li
            className={`tab ${!all && industrial ? "active" : ""}`}
            onClick={handleInd}
          >
            صناعى
          </li>
          <li
            className={`tab ${!all && other ? "active" : ""}`}
            onClick={handleOth}
          >
            اخرى
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
