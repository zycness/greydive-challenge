import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='bg-slate-900 text-white min-h-[50px] flex items-center'>
      <nav className='container mx-auto'>
        <ul className='flex justify-center space-x-6 font-semibold text-lg'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/usuarios"}>Usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
