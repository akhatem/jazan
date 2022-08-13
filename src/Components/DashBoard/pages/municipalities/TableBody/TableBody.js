import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TableBody({
  goverment,
  setGoverment,
  goverments,
  inputEdit,
  token,
  count,
}) {
  const [edit, setEdit] = useState(inputEdit);
  const [dropDown, setDropDown] = useState([]);
  const input = useRef(null);
  const dropDownRef = useRef(null);
  const handleEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    const getGoverments = async () => {
      const res = await fetch("https://marsad.almofawter.net/api/Governorates");
      const { data } = await res.json();
      setDropDown(data);
    };
    getGoverments();
  }, []);

  const handleshow = () => {
    if (input.current.value !== "" && +dropDownRef.current.value !== 0) {
      const newGov = goverments.map((gov) => {
        if (gov.id === goverment.id) {
          gov.name = input.current.value;
          gov.governorateName = dropDown.filter(
            (item) => item.id === +dropDownRef.current.value
          )[0].name;
        }

        return gov;
      });

      setGoverment(newGov);
      setEdit(false);
      if (!goverment.new) {
        const send = fetch(
          `https://marsad.almofawter.net/api/Municipalities/${goverment.id}`,
          {
            method: "PUT",
            headers: {
              accept: "application/json",
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: goverment.name,
              governorateId: dropDownRef.current.value,
            }),
          }
        )
          .then((data) => toast.success("تم التعديل", { closeOnClick: true }))
          .catch((err) =>
            toast.error(" لم يتم التعديل", { closeOnClick: true })
          );
      } else {
        const send = fetch(`https://marsad.almofawter.net/api/Municipalities`, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: goverment.name,
            governorateId: dropDownRef.current.value,
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
          .then((data) => toast.success("تم الاضافة", { closeOnClick: true }))
          .catch((err) => {
            toast.error(" لم يتم الاضافة ", { closeOnClick: true });
          });
      }
    } else {
      toast.error(" يجب ادخال البيانات", { closeOnClick: true });
    }
  };

  const handleDelete = () => {
    const deleteIndex = fetch(
      `https://marsad.almofawter.net/api/Municipalities/${goverment.id}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        const newData = [...goverments].filter(
          (item) => item.id !== goverment.id
        );
        setGoverment(newData);
        toast.success("تم الحذف", { closeOnClick: true });
      })
      .catch((err) => toast.success("لم يتم الحذف", { closeOnClick: true }));
  };

  return (
    <>
      <tr>
        <th scope="row">{count}</th>
        <td>
          {edit || !goverment.name ? (
            <input type={"text"} defaultValue={goverment.name} ref={input} />
          ) : (
            goverment.name
          )}
        </td>
        <td>
          {edit || !goverment.name ? (
            <select name="cars" ref={dropDownRef}>
              <option defaultValue="0" disabled selected>
                اختار المحافظة
              </option>
              {dropDown.map((item, ind) => (
                <option defaultValue={item.id} key={ind}>
                  {item.name}
                </option>
              ))}
            </select>
          ) : (
            goverment.governorateName
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
