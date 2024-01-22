import axios from "axios";
import BlogContext from "../context/BlogContext";
import { useEffect } from "react";

function GetBlog({ blog, setBlog }) {
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/blog", blog);
      setBlog(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BlogContext.Consumer>
      <div className="row m-3">
        {blog.map((blog) => {
          return (
            <div
              key={blog.id}
              className="card col-4 m-3"
              style={{ width: "18rem" }}
            >
              <img
                src={blog.image}
                className="card-img-top m-2  "
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </BlogContext.Consumer>
  );
}

export default GetBlog;
