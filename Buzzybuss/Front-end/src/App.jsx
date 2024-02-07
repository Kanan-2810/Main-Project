import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import setUser from "./store/user/action";
import axios from "axios";
function App() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    if (!data) {
      nevigate("/login");
    }
  }, []);

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(data));
    // console.log("hjgsd", userData);
    dispatch({
      type: "set-user",
      payload: userData,
    });
    // console.log("USER", userData);
    getBlogs();
  }, []);
  const getBlogs = async () => {
    const data = await axios.get("http://localhost:8000/api/blog");
    console.log(data);
    dispatch({
      type: "set-blog",
      payload: data.data.blogs,
    });
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <div
          className="d-flex justify-content-center "
          style={{ marginLeft: "20rem", marginTop: "2rem" }}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
