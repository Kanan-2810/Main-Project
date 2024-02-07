import { useSelector } from "react-redux";
import photo from "../assets/photo.jpg";
function GetBlog() {
  const blog_temp = useSelector((state) => state.blogReducer) || [];
  const blog = blog_temp?.blog || [];
  console.log("blog: ", blog);

  return (
    <div className="row m-3">
      {blog.map((blog) => {
        return (
          <div
            key={blog.id}
            className="card col-4 m-3"
            style={{ width: "18rem" }}
          >
            <img src={photo} className="card-img-top m-2  " alt="..."></img>
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
