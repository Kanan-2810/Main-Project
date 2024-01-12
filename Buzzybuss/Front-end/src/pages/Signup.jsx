import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nevigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem(register.email, JSON.stringify(register));
    createUser();
    nevigate("/login");
  };
  const createUser = async () => {
    const data = await axios.post(
      "http://localhost:8000/api/user/register",
      register
    );
    if (data) {
      console.log(data.data);
    }
  };
  return (
    <form className="sign-up">
      <div className="mb-3">
        <label for="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          name="name"
          value={register.name}
          onChange={handleChange}
          aria-describedby="nameHelp"
        />
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={register.email}
          onChange={handleChange}
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
          value={register.password}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        sign up
      </button>
    </form>
  );
}
export default Signup;
