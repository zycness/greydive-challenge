import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Usuarios = () => {
  // list of users from firestore
  const [users, setUsers] = useState([]);

  // using useEffect for fetching the date from firestore
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.forEach((doc) => {
        setUsers((users) => [
          ...users,
          {
            full_name: doc.data().full_name,
            email: doc.data().email,
            country_of_origin: doc.data().country_of_origin,
            birth_date: doc.data().birth_date,
          },
        ]);
      });
    };
    getUsers();

    // and doing some cleanups with the porpuse of not making the state growing with the old users
    // example: if we render 1 time and we have "kevin and florencia" and we do a prerender it will show "kevin and florencia, kevin and florencia"
    return setUsers([]);
  }, []);

  return (
    <section className='min-h-[calc(85vh-50px)] bg-slate-900 text-white'>
      <h1 className='text-center font-bold text-3xl py-12'>
        GREYDIVE USUARIOS
      </h1>
      <ul className='flex flex-wrap justify-center'>
        {/* making sure that the users are there and if not we set a loading text */}
        {users.length > 0 ? (
          users.map((user, i) => {
            return (
              <li key={i + 2} className='bg-slate-800 p-3 m-3 rounded-md'>
                <h4 className='text-gray-400'>
                  <span className='font-semibold text-gray-100'>Nombre:</span>{" "}
                  {user.full_name}
                </h4>
                <h4 className='text-gray-400'>
                  <span className='font-semibold text-gray-100'>Correo:</span>{" "}
                  {user.email}
                </h4>
                <h4 className='text-gray-400'>
                  <span className='font-semibold text-gray-100'>
                    Fecha de nacimiento:
                  </span>{" "}
                  {user.birth_date}
                </h4>
                <h4 className='text-gray-400'>
                  <span className='font-semibold text-gray-100'>
                    País de origen:
                  </span>{" "}
                  {user.country_of_origin}
                </h4>
              </li>
            );
          })
        ) : (
          <h2 className='text-center w-screen'>CARGANDO...</h2>
        )}
      </ul>
    </section>
  );
};

export default Usuarios;
