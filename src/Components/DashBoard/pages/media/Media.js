import React, { useState } from "react";
import "./Media.css";
import TableBody from "./TableBody/TableBody";

const Media = () => {
  const [mediaContent, setMediaContent] = useState([
    {
      id: "432",
      sectionName: "sdsafdsadf",
      url: "../images/1.jpg",
    },
  ]);
  const handleAdd = () => {
    const gov = [];

    setMediaContent([
      ...mediaContent,
      {
        id: !mediaContent.length
          ? 1
          : mediaContent[mediaContent.length - 1].id + 1,
        name: "",
        agricultural: "",
        industrial: "",
        residential: "",
        commercial: "",
        other: "",
        edit: true,
        new: true,
      },
    ]);
  };
  // useEffect(() => {
  //   const login = JSON.parse(sessionStorage.getItem("login"));
  //   setToken(login.token);
  //   const data = fetch("https://marsad.almofawter.net/api/MapCities")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setGoverment([...res.data]);
  //     });
  // }, []);
  return (
    <>
      <h2>خريطة جازان</h2>
      <form className="form">
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Default file input example
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div>
          <input
            class="form-control"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
        </div>
        <button className="btn btn-success">Send</button>
      </form>
      <table className="table  table-centers">
        <thead>
          <tr>
            <th scope="col">رقم </th>
            <th scope="col">اسم الصفحة</th>
            <th scope="col">الصورة</th>
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
          {mediaContent.map((gov, ind) => (
            <TableBody
              url={gov.url}
              sectionName={gov.sectionName}
              key={ind}
              token={"token"}
              id={ind + 1}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Media;
