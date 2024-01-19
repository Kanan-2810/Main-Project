import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Signup from "./pages/Signup";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const nevigate = useNavigate();
  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    if (!data) {
      nevigate("/login");
    }
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
