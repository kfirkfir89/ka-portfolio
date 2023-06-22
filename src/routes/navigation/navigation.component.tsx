/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Link, NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      {/* <div className="navbar justify-center bg-gray-700 p-0">
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="btn-ghost btn text-xl normal-case">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="btn-ghost btn text-xl normal-case">
                projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="btn-ghost btn text-xl normal-case">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="navbar absolute z-10 bg-none">
        {/* <Link to={''} className="">
          <img
            className="mx-4 w-3/12 -scale-x-[1] transform object-scale-down"
            src="/src/assets/catglasses.svg"
            alt=""
          />
        </Link> */}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
