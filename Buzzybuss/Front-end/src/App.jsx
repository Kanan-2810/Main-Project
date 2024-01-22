import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserContext from "./context/UserContex";
import BlogContext from "./context/BlogContext";

function App() {
  const nevigate = useNavigate();
  let userData;
  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");
    if (!data) {
      nevigate("/login");
    }
    userData = JSON.parse(localStorage.getItem(data));
  }, []);

  return (
    <BlogContext.Consumer>
      <UserContext.Consumer>
        {({ user, setUser }) => {
          setUser(userData);

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
        }}
      </UserContext.Consumer>
    </BlogContext.Consumer>
  );
}

export default App;
