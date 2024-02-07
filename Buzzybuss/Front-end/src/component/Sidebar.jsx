import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
function Sidebar() {
  const user = useSelector((state) => state.userReducer);

  const u_name = user.user.name.split(" ");

  const nevigate = useNavigate();
  const handleLogout = () => {
    if (window.confirm("Are You Sure Want to Logout?")) {
      sessionStorage.clear();
      nevigate("/login");
    }
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", height: "100%", position: "fixed", zIndex: 1 }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="10">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">BuzzyBuss</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="#" className="nav-link ">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            <div className="d-flex align-items-center justify-content-center">
              <h4>
                <CgProfile />
              </h4>
              <h4>&nbsp;{u_name[0]}</h4>
            </div>
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/" className="nav-link ">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-blog" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Add Blog
          </Link>
        </li>
        <li>
          <Link to="/get-my-blog" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            MyBlogs
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Features
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            About
          </Link>
        </li>
        <li
          style={{ cursor: "pointer" }}
          className="nav-link "
          onClick={handleLogout}
        >
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#home"></use>
          </svg>
          Logout
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
