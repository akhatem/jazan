import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TableBody({
  name,
  value,
  id,
  newid,
  setGoverment,
  goverments,
  goverment,
  setGovSend,
  govSend,
  editInput,
  idOb,
  nameGov,
  token,
}) {
  const [edit, setEdit] = useState(editInput);

  const input = useRef(null);
  const inputValue = useRef(null);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleshow = () => {
    if(inputValue.current.value !== '' && input.current.value !== ''){
      const newGov = goverments.map((gov) => {
        if (gov.id === id) {
          gov.name = input.current.value;
          gov.value = inputValue.current.value;
        }
  
        return gov;
      });
  
      setGoverment(newGov);
      setEdit(false);
      const StatisticsVal = goverments.map((items) => {
        if (goverment.id === items.id) {
          name = input.current.value;
          value = inputValue.current.value;
          return items;
        }
        return items;
      });
      const send = fetch(`https://marsad.almofawter.net/api/Statistics/${idOb}`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: idOb,
          name: nameGov,
          statisticKeys: StatisticsVal,
        }),
      })
        
        .then((data) => toast.success("تم الاضافة", { closeOnClick: true }))
        .catch((err) => toast.error(" لم يتم الاضافة ", { closeOnClick: true }));

    }else{
      toast.error(' يجب ادخال البيانات', { closeOnClick: true });
    }
  };

  const handleDelete = () => {
    const StatisticsVal = goverments.filter((items) => {
      if (goverment.id === items.id) {
        return false;
      }
      return true;
    });
    const send = fetch(`https://marsad.almofawter.net/api/Statistics/${idOb}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: idOb,
        name: nameGov,
        statisticKeys: StatisticsVal,
      }),
    })
      .then((res) => {
        toast.success("تم الحذف", { closeOnClick: true });
        setGoverment(StatisticsVal);
      })
      .catch((err) => toast.success("لم يتم الحذف", { closeOnClick: true }));
  };

  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>
          {edit || !name ? (
            <input type={"text"} defaultValue={name} ref={input} />
          ) : (
            name
          )}
        </td>
        <td>
          {edit || !name ? (
            <input type={"number"} defaultValue={value} ref={inputValue} />
          ) : (
            value
          )}
        </td>
        <td className="icons-edits">
          <ul className="d-flex justify-content-center gap-3 mb-0">
            <li>
              <button
                className={`btn ${edit ? "disabled" : null}`}
                onClick={() => handleEdit()}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </li>
            <li>
              <button
                className={`btn ${!edit ? "disabled" : null}`}
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
