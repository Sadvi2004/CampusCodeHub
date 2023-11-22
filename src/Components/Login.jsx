import React from "react";
import "../Styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [ValidateEmail, setValidateEmail] = useState(true);
  const [ValidatePassword, setValidatePassword] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const data = [
    {
      username: "2211cs010067@mallareddyuniversity.ac.in",
      password: "sadvi",
    },
    {
      username: "jordiaaaaaaa@mallareddyuniversity.ac.in",
      password: "pucking",
    },
  ];

  const handleLogin = () => {
    const auth = data.find((data) => Email === data.username);
    if (auth) {
      setValidateEmail(true);
      if (Password === auth.password) {
        setValidatePassword(true);
        navigate("/mainpage");
      } else {
        setValidatePassword(false);
      }
    } else {
      setValidateEmail(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <form action="login" className="form">
          <h2>Login</h2>
          <input
            type="mail"
            className="mail bg-none"
            placeholder="xyz@mallareddyuniversity.ac.in"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {ValidateEmail ? "" : <p>Please enter correct email address</p>}
          <br />
          <input
            type="password"
            className="password bg-none"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {ValidatePassword ? "" : <p>Please enter correct password address</p>}
          <br />
          <input
            type="button"
            className="login-btn"
            value="Login"
            onClick={handleLogin}
          />
        </form>
      </div>
    </>
  );
}

export default Login;
