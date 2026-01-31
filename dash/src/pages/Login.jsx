import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/login",
      { ...inputValue } 
    );
     //console.log("LOGIN RESPONSE:", data);

    const { success, message, token } = data;

    if (success) {
      
      localStorage.setItem("token", token);

      handleSuccess(message);

      
      navigate("/kite");
    } else {
      handleError(message);
    }

  } catch (error) {
    console.log(error);
    handleError("Login failed");
  }

  setInputValue({
    email: "",
    password: "",
  });
};

  

  return (
   <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm" style={{ width: "380px" }}>
        <div className="card-body p-4">
          <h4 className="text-center mb-4 fw-semibold">
            Login to Zerodha
          </h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100 mb-3">
              Login
            </button>

            <div className="text-center">
              <small>
                Don’t have an account?{" "}
                <Link to="/signup" className="text-decoration-none">
                  Signup
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>

  );
};

export default Login;