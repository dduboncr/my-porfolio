import React from 'react';
import { NavLink } from 'react-router-dom';

import { SocialIcon } from 'react-social-icons';
const NavBar = () => {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
          >
            Diego Dubon
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-gray-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-gray-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-200 hover:text-gray-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/diegodubon/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
