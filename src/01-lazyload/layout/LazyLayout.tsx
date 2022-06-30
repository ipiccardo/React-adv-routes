import React from 'react'
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LazyPge1, LazyPge2, LazyPge3 } from '../pages'

export const LazyLayout = () => {
  return (
    <div>

    <h1>lazyLayout Page</h1>
    <ul>
        <li>
            <NavLink to="lazy1">lazy 1</NavLink>
        </li>
        <li>
            <NavLink to="lazy2">lazy 2</NavLink>
        </li>
        <li>
            <NavLink to="lazy3">lazy 3</NavLink>
        </li>
    </ul>

    <Routes>
      <Route path='lazy1' element={ <LazyPge1 />}/>
      <Route path='lazy2' element={ <LazyPge2 />}/>
      <Route path='lazy3' element={ <LazyPge3 />}/>

      <Route path='*' element={<Navigate replace to='Lazy1'/>} />
    </Routes>

    </div>

    // RUtas hijas iran aqui
  );
};

export default LazyLayout;
