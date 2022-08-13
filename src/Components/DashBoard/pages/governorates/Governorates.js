import React, { useEffect, useState } from 'react';
import './Governorates.css';
import TableBody from './TableBody/TableBody';

const Governorates = () => {
  const [goverment, setGoverment] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem('login'));
    setToken(login.token);

    const data = fetch('https://marsad.almofawter.net/api/Governorates')
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

  return (
    <>
      <h2>محافظات</h2>
      <table className="table  table-centers">
        {/* table-striped */}
        <thead>
          <tr>
            <th scope="col">رقم محافظة</th>
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
