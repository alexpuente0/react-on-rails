import React from "react";
import { NavLink } from 'react-router-dom';
const Hello = () => {
  return (
    <div>
      <h1>      
        Welcome to greeting app!
      </h1>
      <NavLink to={`/greet`}>Get your random greeting</NavLink>
    </div>
  );
};

export default Hello;