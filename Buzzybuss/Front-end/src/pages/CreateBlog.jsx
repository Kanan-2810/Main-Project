import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Buffer } from "buffer";
function CreateBlog() {
  const user = useSelector((state) => state.userReducer);
  const nevigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    user: user.user?._id,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "image" && files.length > 0) {
      const selectedImage = files[0];
  
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const base64String = event.target.result;
        setBlog({ ...blog, image: base64String });
        console.log("Base64 String:", base64String);
      };
  
      reader.readAsDataURL(selectedImage);
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };
  

  const handleADD = () => {
    console.log("clicked");
    console.log(blog);
    createBlog();
    nevigate("/get-blog");
  };
  const createBlog = async () => {
    console.log("blog: ", blog);
    const data = await axios.post("http://localhost:8000/api/blog/add", blog, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data) {
      console.log(data.data);
    }
  };
  return (
    <form className="create-blog">
      <div className="mb-3 ">
        <label for="name" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="title"
          value={blog.title}
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
          name="description"
          value={blog.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="image" className="form-label">
          Image
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          value={blog.image}
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
