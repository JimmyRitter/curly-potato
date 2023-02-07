import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
