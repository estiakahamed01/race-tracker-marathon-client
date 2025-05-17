import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out");
      });
  };
  const links = (
    <div className="flex items-center">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Marathons</a>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 mt-7n">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">
          Race<span className="text-green-500">Tracker</span>
        </a>
      </div>
      <div className="navbar-end lg:flex">
        {user ? (
          <div className="flex flex-row items-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/marathons">Marathons</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/avatar">Use Avatar</Link>
            <Link>
              <button onClick={handleSignOut} className="btn">Logout</button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-5">
            <Link to="/">Home</Link>
            <Link>Marathons</Link>
            <Link to="register">Register</Link>
            <Link to="login">
              <button className="btn">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
