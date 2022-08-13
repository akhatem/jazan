import React, { useEffect, useState } from 'react';
import './Centers.css';
import TableBody from './TableBody/TableBody';

const Governorates = () => {
  const [goverment, setGoverment] = useState([]);
  const [govSend, setGovSend] = useState([]);
  const [token, setToken] = useState('');

  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem('login'));
    setToken(login.token);
    // let count = 1;

    const data = fetch('https://marsad.almofawter.net/api/Centers')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setGoverment([...res.data]);
      })
  }, []);

  const handleAdd = () => {
    const gov = [];

    setGoverment([
      ...goverment,
      {
        id: !goverment.length ? 1 : goverment[goverment.length - 1].id + 1,
        name: '',
        edit: true,
        new: true,
      },
    ]);
  };

  const handleSend = () => {
    govSend.forEach((gov) => {
      const send = fetch(
        `https://marsad.almofawter.net/api/Centers/${gov.id}`,
        {
          method: 'PUT',
          headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: gov.name }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          const send = fetch(`https://marsad.almofawter.net/api/Centers`, {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: gov.name }),
          })
            .then((res) => res.json())
            
        });
    });

    setBtnDisabled(false);
    setGovSend([]);
  };

  return (
    <>
      <h2>مراكز</h2>
      <table className="table  table-centers">
        {/* table-striped */}
        <thead>
          <tr>
            <th scope="col">رقم مركز</th>
            <th scope="col">اسم مركز</th>
            <th scope="col">اسم بلدية</th>
            <th scope="col">اسم محافظة</th>

            <th scope="col" className="icons-edits">
              <ul>
                <li>
                  <button className="btn" onClick={() => handleAdd()}>
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
              goverment={gov}
              key={ind}
              setGoverment={setGoverment}
              goverments={goverment}
              editInput={gov.edit}
              token={token}
              count={ind + 1}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Governorates;
