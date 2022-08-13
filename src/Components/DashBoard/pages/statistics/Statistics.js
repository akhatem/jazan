import React, { useEffect, useState } from "react";
import "./Statistics.css";
import TableBody from "./TableBody/TableBody";

const Statistics = () => {
  const [goverment, setGoverment] = useState([]);
  const [goverment2, setGoverment2] = useState([]);
  const [id1, setId1] = useState(0);
  const [id2, setId2] = useState(0);
  const [govname1, setgovname1] = useState(0);
  const [govname2, setgovname2] = useState(0);
  const [govSend, setGovSend] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem("login"));
    setToken(login.token);
    let count = 1;
    let count2 = 1;
    const data = fetch("https://marsad.almofawter.net/api/Statistics")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setId1(res.data[0].id);
        setId2(res.data[1].id);
        setgovname1(res.data[0].name);
        setgovname2(res.data[1].name);
        setGoverment(
          res.data[0].statisticKeys.map((item) => {
            item.id = count;
            count++;
            return item;
          })
        );
        setGoverment2(
          res.data[1].statisticKeys.map((item) => {
            item.id = count2;
            count2++;
            return item;
          })
        );
      })
  
  }, []);

  const handleAdd = (table) => {
    if (!table) {
      setGoverment([
        ...goverment,
        {
          id: goverment.length + 1,
          name: "",
          value: 0,
          edit: true,
          new: true,
        },
      ]);
    } else {
      setGoverment2([
        ...goverment2,
        {
          id: goverment2.length + 1,
          name: "",
          value: 0,
          edit: true,
          new: true,
        },
      ]);
    }
  };

  const handleSend = () => {
    govSend.forEach((gov) => {
      const send = fetch(
        `https://marsad.almofawter.net/api/Statistics${gov.id}`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: gov.name,
            statisticKeys: [...gov.statisticKeys],
          }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          const send = fetch(`https://marsad.almofawter.net/api/Statistics`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: gov.name,

              statisticKeys: [...gov.statisticKeys],
            }),
          })
            .then((res) => res.json())
            
            
        });
    });

    setGovSend([]);
  };
  return (
    <>
      <h2> احصائيات كاملة </h2>
      <table className="table  table-centers">
        <thead>
          <tr>
            <th scope="col">رقم </th>
            <th scope="col">نوع</th>
            <th scope="col">عدد</th>
            <th scope="col" className="icons-edits">
              <ul>
                <li>
                  <button className="btn" onClick={() => handleAdd(0)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </li>
              </ul>
            </th>
          </tr>
        </thead>
        <tbody>
          {goverment?.map((gov, ind) => (
            <TableBody
              name={gov.name}
              value={gov.value}
              id={gov.id}
              newid={gov.new}
              goverments={goverment}
              setGoverment={setGoverment}
              govSend={govSend}
              goverment={gov}
              setGovSend={setGovSend}
              key={ind}
              idOb={id1}
              nameGov={govname1}
              token={token}
              editInput={gov.edit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
