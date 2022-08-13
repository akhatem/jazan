import React, { useEffect, useState } from 'react';
import TableBody from './TableBody/TableBody';
import './UsersPanel.css';

const UsersPanel = () => {
  const [goverment, setGoverment] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem('login'));
    setToken(login.token);
  }, []);
  useEffect(() => {
    if (!token === false) {
      const data = fetch('https://marsad.almofawter.net/api/Users', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setGoverment([...res.data]);
        })
        
    }
  }, [token]);

  const handleAdd = () => {
    const gov = [];

    setGoverment([
      ...goverment,
      {
        id: !goverment.length ? 1 : goverment[goverment.length - 1].id + 1,
        name: '',
        password: '',
        email: '',
        phone: '',
        edit: true,
        new: true,
      },
    ]);
  };

  return (
    <>
      <h2>المستخدمين</h2>
      <table className="table  table-centers">
        {/* table-striped */}
        <thead>
          <tr>
            <th scope="col">رقم المستخدم</th>
            <th scope="col">اسم</th>
            <th scope="col">كلمة السر</th>
            <th scope="col">الايميل</th>
            <th scope="col">التليفون</th>
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

export default UsersPanel;
