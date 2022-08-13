import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TableBody({ url, id, sectionName }) {
  console.log(sectionName);
  // const handleDelete = () => {
  //   fetch(`https://marsad.almofawter.net/api/MapCities/${goverment.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       accept: "application/json",
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       const newData = [...goverments].filter(
  //         (item) => item.id !== goverment.id
  //       );
  //       setGoverment(newData);
  //       toast.success("تم الحذف", { closeOnClick: true });
  //     })
  //     .catch((err) => toast.success("لم يتم الحذف", { closeOnClick: true }));
  // };
  console.log(url);
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{sectionName}</td>
        <td>
          <img src={url} alt="image" />
        </td>
        <td className="icons-edits">
          <ul className="d-flex justify-content-center gap-3 mb-0">
            <li>
              <button className="btn">
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
