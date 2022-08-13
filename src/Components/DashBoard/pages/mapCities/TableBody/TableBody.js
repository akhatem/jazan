import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TableBody({
  goverment,
  setGoverment,
  goverments,
  setBtnDisabled,
  setGovSend,
  govSend,
  editInput,
  token,
  id,
}) {
  const [edit, setEdit] = useState(editInput);
  const input = useRef(null);
  const inputAgricultural = useRef(null);
  const inputIndustrial = useRef(null);
  const inputResidential = useRef(null);
  const inputCommercial = useRef(null);
  const inputOther = useRef(null);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleshow = () => {
    const newGov = goverments.map((gov) => {
      if (gov.id === goverment.id) {
        gov.name = input.current.value;
        gov.agricultural = inputAgricultural.current.value;
        gov.industrial = inputIndustrial.current.value;
        gov.commercial = inputCommercial.current.value;
        gov.residential = inputResidential.current.value;
        gov.other = inputOther.current.value;
      }

      return gov;
    });

    const check =
      input.current.value !== '' &&
      inputAgricultural.current.value !== '' &&
      inputIndustrial.current.value !== '' &&
      inputCommercial.current.value !== '' &&
      inputOther.current.value !== '';
    if (check) {
      setGoverment(newGov);
      setEdit(false);
      if (!goverment.new) {
        const send = fetch(
          `https://marsad.almofawter.net/api/MapCities/${goverment.id}`,
          {
            method: 'PUT',
            headers: {
              accept: 'application/json',
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: goverment.name,
              agricultural: goverment.agricultural,
              industrial: goverment.industrial,
              residential: goverment.residential,
              commercial: goverment.commercial,
              other: goverment.other,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => toast.success('تم التعديل', { closeOnClick: true }))
          .catch((err) =>
            toast.error(' لم يتم التعديل', { closeOnClick: true })
          );
      } else {
        const send = fetch(`https://marsad.almofawter.net/api/MapCities`, {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: goverment.name,
            agricultural: goverment.agricultural,
            industrial: goverment.industrial,
            residential: goverment.residential,
            commercial: goverment.commercial,
            other: goverment.other,
          }),
        })
          .then((res) => {
            setGoverment(
              goverments.map((item) => {
                if (item.id === goverment.id) {
                  item.new = false;
                  return item;
                } else return item;
              })
            );
          })
          .then((data) => toast.success('تم الاضافة', { closeOnClick: true }))
          .catch((err) => {
            toast.error(' لم يتم الاضافة ', { closeOnClick: true });
          });
      }
    } else {
      toast.error(' يجب ادخال البيانات', { closeOnClick: true });
    }
  };

  const handleDelete = () => {
    fetch(`https://marsad.almofawter.net/api/MapCities/${goverment.id}`, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const newData = [...goverments].filter(
          (item) => item.id !== goverment.id
        );
        setGoverment(newData);
        toast.success('تم الحذف', { closeOnClick: true });
      })
      .catch((err) => toast.success('لم يتم الحذف', { closeOnClick: true }));
  };

  return (
    <>
      <tr>
        <th scope="row">
          {
            /* {edit ? (
          <input type={"text"} defaultValue={goverment.id + 1} />
        ) : (
          goverment.id + 1
        )} */
            goverment.id
          }
        </th>
        <td>
          {edit || !goverment.name ? (
            <input type={'text'} defaultValue={goverment.name} ref={input} />
          ) : (
            goverment.name
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <input
              type={'number'}
              defaultValue={goverment.agricultural}
              ref={inputAgricultural}
            />
          ) : (
            goverment.agricultural
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <input
              type={'number'}
              defaultValue={goverment.industrial}
              ref={inputIndustrial}
            />
          ) : (
            goverment.industrial
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <input
              type={'number'}
              defaultValue={goverment.residential}
              ref={inputResidential}
            />
          ) : (
            goverment.residential
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <input
              type={'number'}
              defaultValue={goverment.commercial}
              ref={inputCommercial}
            />
          ) : (
            goverment.commercial
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <input
              type={'number'}
              defaultValue={goverment.other}
              ref={inputOther}
            />
          ) : (
            goverment.other
          )}
        </td>
        <td className="icons-edits">
          <ul className="d-flex justify-content-center gap-3 mb-0">
            <li>
              <button
                className={`btn ${edit ? 'disabled' : null}`}
                onClick={() => handleEdit()}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </li>
            <li>
              <button
                className={`btn ${!edit ? 'disabled' : null}`}
                onClick={() => handleshow()}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => handleDelete()}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          </ul>
        </td>
      </tr>
      <ToastContainer />
    </>
  );
}

export default TableBody;
