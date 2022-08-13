import React, { useRef, useState } from "react";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";

const handleInputFocus = (e) => {
  e.target.parentNode.parentNode.classList.add("focus");
};

const handleInputBlur = (e) => {
  e.target.parentNode.parentNode.classList.remove("focus");
};
const LogIn = ({ setToken }) => {
  const [handleError, setHandleError] = useState("");
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const sumbitHandler = (e) => {
    e.preventDefault();

    const login = async () => {
      const res = await fetch(
        `https://marsad.almofawter.net/api/Users/Login?Email=${username.current.value}&Password=${password.current.value}`
      );

      const { data, succeeded, message } = await res.json();

      if (succeeded) {
        sessionStorage.setItem("login", JSON.stringify(data));
        setToken(JSON.parse(sessionStorage.getItem("login")));
        navigate("/cPanel/dashboardMain");
        setHandleError("");
      } else {
        setHandleError(message);
      }
    };

    login();
  };
  return (
    <div>
      <div className="login-content">
        <form onSubmit={sumbitHandler}>
          <h2 className="title">لوحة التحكم للجازان</h2>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>اسم المستخدم</h5>
              <input
                type="text"
                className="input"
                onFocus={handleInputFocus.bind(this)}
                onBlur={handleInputBlur.bind(this)}
                ref={username}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>كلمة السر</h5>
              <input
                type="password"
                className="input"
                onFocus={handleInputFocus.bind(this)}
                onBlur={handleInputBlur.bind(this)}
                ref={password}
              />
            </div>
          </div>
          <p className={`error_message ${!handleError ? "d-none" : ""}`}>
            {handleError}
          </p>
          <p>
            <input type="submit" className="btn" value="تسجيل الدخول" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
