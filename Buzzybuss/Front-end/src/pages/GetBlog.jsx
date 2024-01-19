import React from "react";
import blogs from "../store/blog-list-store";
function GetBlog() {
  return (
    <div className="row m-3">
      {blogs.map((blog) => {
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
  );
}

export default GetBlog;
