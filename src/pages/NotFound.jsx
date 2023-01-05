import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className='bg-slate-900 text-white min-h-[calc(85vh-50px)] flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold'>
        Esta ruta no fue encontrada, puede ir a:
      </h1>
      <ul className='flex flex-col list-disc underline text-2xl text-gray-300'>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/usuarios"}>Usuarios</Link>
        </li>
      </ul>
    </section>
  );
};

export default NotFound;
