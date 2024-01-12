import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    user: "",
  });
  const nevigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  const handleADD = () => {
    console.log("clicked");
    createBlog();
    nevigate("/get-blog");
  };
  const createBlog = async () => {
    const data = await axios.post("http://localhost:8000/api/blog/add", blog);
    if (data) {
      console.log(data.data);
    }
  };
  return (
    <form className="create-blog">
      <div className="mb-3">
        <label for="name" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="name"
          value={blog.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="name1"
          value={blog.name1}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="image" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="name2"
          value={blog.name2}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="image" className="form-label">
          User-ID
        </label>
        <input
          type="text"
          className="form-control"
          id="usr-id"
          name="name3"
          value={blog.name3}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleADD}>
        ADD
      </button>
    </form>
  );
}

export default CreateBlog;
