import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
let predefinedUsername = "brightlightImmigrationBCV3S2A1";
let predefinedPassword = "7mz2a,H_4B)J";

let Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let { login } = useAuth();
  let navigate = useNavigate();

  let notifySuccess = () => {
    toast.success("Success, Redirecting To Dashboard", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Invalid Credentials.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      notifySuccess();
      localStorage.setItem("isLoggedIn", "true");
      login();
      setTimeout(() => {
        navigate("/dash/panel/overwrite");
      }, 3000);
    } else {
      notifyError();
    }
  };

  return (
    <>
      <div className={styles.login}>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="password"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className={styles.submitButton} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;