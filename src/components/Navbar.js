import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isToogle, setIsToogle] = useState(false);
  const toogle = () => {
    setIsToogle(!isToogle);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isToogle) {
        setIsToogle(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <nav className="bg-cool">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex md:justify-center">
            <div className="order-last md:order-none">
              <NavLink
                exact
                to="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 font-light"
                activeClassName="font-bold text-blue-900"
              >
                Home
              </NavLink>
            </div>
            <div className="hidden md:flex space-x-3">
              <NavLink
                to="/cart"
                activeClassName="font-bold text-blue-900"
                className="py-5 px-3 text-gray-700 hover:text-gray-900 font-light"
              >
                Cart
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="font-bold text-blue-900"
                className="py-5 px-3 text-gray-700 hover:text-gray-900 font-light"
              >
                About
              </NavLink>
            </div>

            <div className="flex items-center md:hidden">
              <button className="mobile-menu-button" onClick={toogle}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={isToogle ? "block" : "hidden"}>
          <NavLink
            to="/cart"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Cart
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
