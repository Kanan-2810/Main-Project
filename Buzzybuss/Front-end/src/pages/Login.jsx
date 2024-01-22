import { useNavigate, Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const nevigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = () => {
    checkDetails();
  };
  const checkDetails = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8000/api/user/login",
        login
      );
      console.log(data);
      if (data.data.existingUser) {
        sessionStorage.setItem("currentUser", login.email);
        localStorage.setItem(
          login.email,
          JSON.stringify(data.data.existingUser)
        );
        nevigate("/");
      } else {
        alert(data.data.message);
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <form className="log-in">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          value={login.email}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
      <div>
        <h5>Don't Have an account? </h5>
        <Link to="/sign-up"> Create-Account</Link>
      </div>
    </form>
  );
}
export default Login;
