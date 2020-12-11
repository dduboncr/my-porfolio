import React from 'react';
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact>
            Kapehe
          </NavLink>
          <NavLink to="/post">Blog Post</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
};
