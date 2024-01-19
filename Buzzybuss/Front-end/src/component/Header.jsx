import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const nevigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    nevigate("/login");
  };
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
              a
              href
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2">
              Features
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2">
              About
            </Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="nav-link px-2"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
