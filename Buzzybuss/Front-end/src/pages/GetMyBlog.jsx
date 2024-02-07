import { useSelector } from "react-redux";
import photo from "../assets/photo.jpg";

function GetMyBlog() {
  const user = useSelector((state) => state.userReducer);
  const blog_temp = useSelector((state) => state.blogReducer) || [];
  const blog = blog_temp?.blog || [];

  return (
    <div className="row m-3">
      {blog.map((blog) => {
        if (user.user._id == blog.user) {
          return (
            <div
              key={blog.id}
              className="card col-4 m-3"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/svg+xml;base64,${blog.image}`}
                className="card-img-top m-2  "
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

export default GetMyBlog;
