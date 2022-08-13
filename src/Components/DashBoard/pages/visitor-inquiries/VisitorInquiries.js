import React, { useEffect, useState } from "react";
import "./VisitorInquiries.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VisitorInquiries = () => {
  const [contacts, setContacts] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem("login"));
    setToken(login.token);

    if (!token === false) {
      const contactsFun = async () => {
        const data = await fetch("https://marsad.almofawter.net/api/Contacts", {
          method: "GET",
          headers: {
            accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res = await data.json();
        setContacts(res.data);
      };
      contactsFun();
    }
  }, [token]);
  const handleDelete = (id) => {
    const deleteIndex = fetch(
      `https://marsad.almofawter.net/api/Contacts/${id}`,
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
        const newData = [...contacts].filter((item) => item.id !== id);
        toast.success("تم الحذف", { closeOnClick: true });
        setContacts(newData);
      })
      .catch((err) => toast.success("لم يتم الحذف", { closeOnClick: true }));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row" style={{ rowGap: "15px", paddingBottom: "50px" }}>
          {!contacts.length ? (
            <p>لا يوجد استفسارات</p>
          ) : (
            contacts.map((contactItem, ind) => (
              <div className="col-12 col-md-4 " key={ind}>
                <div
                  className=" border border-2 p-3"
                  style={{
                    height: "300px",
                    overflow: "auto",
                    position: "relative",
                  }}
                >
                  <span
                    onClick={() => handleDelete(contactItem.id)}
                    className="fas fa-x contact-delete"
                  ></span>
                  <p className="text-center">رقم: {ind + 1}</p>
                  <p>الاسم: {contactItem.name}</p>
                  <p>الايميل: {contactItem.email}</p>
                  <p>رقم الهاتف: {contactItem.phone}</p>
                  <p>الاستفسار: {contactItem.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default VisitorInquiries;
