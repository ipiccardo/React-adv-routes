import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { LazyPge1, LazyPge2, LazyPge3} from '../01-lazyload/pages/index' ;



const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/Lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/Lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/Lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Lazy1" element={<LazyPge1 />} />
          <Route path="Lazy2" element={<LazyPge2 />} />
          <Route path="Lazy3" element={<LazyPge3 />} />
          <Route path="/*" element={<Navigate to="/Lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
