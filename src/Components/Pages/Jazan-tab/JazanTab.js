import React from 'react';
import './Jazan-tab.css';
import Jazanimgone from '../../../images/ggen.jpg';
import Jazanimgtwo from '../../../images/gnat.jpg';
import Jazanimgthree from '../../../images/gold.jpg';
import 'bootstrap/js/dist/tab';
import { useNavigate } from 'react-router-dom';
const JazanTab = ({ arialabelledby, classess, id, role, tabindex }) => {
  let navigate = useNavigate();
  const goTo = (e) => {
    const target = e.target.dataset.id;
    localStorage.setItem('section', target);
    navigate('/jazan_region/' + e.target.dataset.id);
  };

  return (
    <div
      className={`container ${classess}`}
      id={id}
      aria-labelledby={arialabelledby}
      role={role}
      tabIndex={tabindex}
    >
      <div className="tab_head">
        <h2>منطقة جازان</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={Jazanimgone}
            alt="الملامح الاساسية"
            className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
            data-id="1"
            onClick={(e) => goTo(e)}
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            الملامح الاساسية
          </p>
        </div>
        <div className="col-12 col-md-4 ">
          <img
            src={Jazanimgtwo}
            alt="الخصائص الطبيعية"
            className="img-fluid w-100 rounded  rounded-4 shadow img-jazan"
            data-id="2"
            onClick={(e) => goTo(e)}
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            الخصائص الطبيعية
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src={Jazanimgthree}
            alt="المعالم التاريخية"
            className="img-fluid w-100 rounded rounded-4 shadow img-jazan"
            data-id="3"
            onClick={(e) => goTo(e)}
          />
          <p className="mb-3 mt-3 fs-5 text-center text-jazan">
            المعالم التاريخية
          </p>
        </div>
      </div>
    </div>
  );
};

export default JazanTab;
