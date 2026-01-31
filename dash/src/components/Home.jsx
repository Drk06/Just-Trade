
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {

  const navigate = useNavigate();
const [username, setUsername] = useState("");

 useEffect(() => {
  const verifyAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      setUsername(res.data.user);

      toast(`Hello ${res.data.user}`, {
        position: "top-right",
      });

    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  verifyAuth();
}, [navigate]);
  
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  
  return (
    <>
      <TopBar />
      <Dashboard />
     
    </>
  );
};

export default Home;
