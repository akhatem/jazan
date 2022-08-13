import React, { useEffect, useState } from 'react';
import './Municipalities.css';
import TableBody from './TableBody/TableBody';

const Municipalities = () => {
  const [goverment, setGoverment] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem('login'));
    setToken(login.token);
    const data = fetch('https://marsad.almofawter.net/api/Municipalities')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setGoverment([...res.data]);
      })
      
  }, []);

  const handleAdd = () => {
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
      <h2>البلديات</h2>
      <table className="table  table-centers">
        {/* table-striped */}
        <thead>
          <tr>
            <th scope="col">رقم البلديات</th>
            <th scope="col">اسم البلديات</th>
            <th scope="col">اسم محافظات</th>
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
              inputEdit={gov.edit}
              token={token}
              count={ind + 1}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Municipalities;
