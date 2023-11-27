import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/my-work">MY WORK</Link>
      </li>
      <li>
        <Link to="/blogs">BLOGS</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-full ">
      <div className="max-w-screen-lg mx-auto navbar-start">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="max-w-screen-lg mx-auto navbar-end">
        <a className="btn">WORK WITH ME</a>
      </div>
    </div>
  );
};

export default NavBar;
