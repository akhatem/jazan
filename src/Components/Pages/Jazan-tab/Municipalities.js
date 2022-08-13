import React, { useEffect, useState } from "react";
import "./Jazan-tab.css";
const Municipalities = ({ arialabelledby, classess, id, role, tabindex }) => {
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
    <div
      className={`container ${classess}`}
      id={id}
      aria-labelledby={arialabelledby}
      role={role}
      tabIndex={tabindex}
    >
      <div className="tab_head-Municipalities">
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
  );
};

export default Municipalities;
