import React from "react";
import { useState } from "react";
import db_fields from "../data/db.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/index";

const Home = () => {
  // we create the initial user state
  const initialState = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "argentina",
  };
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // We add the new user with his actual information given by the client.
    await setDoc(doc(db, "users", userInfo.full_name), {
      full_name: userInfo.full_name,
      email: userInfo.email,
      birth_date: userInfo.birth_date,
      country_of_origin: userInfo.country_of_origin,
    })
      // after its success we send a message to the client giving status update
      .then(() => {
        toast.success("Se ha creado su usuario exitosamente!", {
          position: "bottom-left",
        });
        navigate("/usuarios");
      })
      // same as before we send a message to the client for status update
      .catch((err) => {
        toast.error("Ha ocurrido un problema, por favor intente más tarde", {
          position: "bottom-left",
        });
      });
  };

  const handleChange = (e) => {
    // on each field we set a handleChange where we will be storing the value on the component's state
    setUserInfo(() => {
      return { ...userInfo, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className='min-h-[calc(85vh-50px)] bg-slate-900 text-white'>
      <h1 className='text-center font-bold text-3xl py-12'>
        GREYDIVE CHALLENGE
      </h1>
      <article className='container mx-auto'>
        <form
          className='w-[80%] lg:w-1/3 mx-auto flex flex-col items-start space-y-4 bg-slate-800 p-4 rounded-md'
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* we rendered each field from the json file and made their pertinent conditions for rendering */}
          {db_fields.items.map((elem) => {
            if (elem.type === "select") {
              return (
                <div key={elem.name}>
                  <label htmlFor={elem.name}>{elem.label}</label>
                  <select
                    name={elem.name}
                    className='text-black ml-1 p-1 rounded-md'
                    onChange={handleChange}
                  >
                    {elem.options.map((opt) => {
                      return (
                        <option value={opt.value} key={opt.label}>
                          {opt.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            }
            if (elem.type === "submit") {
              return (
                <button
                  type='submit'
                  key={"userSubmit"}
                  className='bg-green-700 px-3 py-1 rounded-md'
                >
                  {elem.label}
                </button>
              );
            }

            if (elem.type === "checkbox") {
              return (
                <div key={elem.name} className='w-full'>
                  <label htmlFor={elem.name} className='flex w-full'>
                    {elem.label}
                    <input
                      type={elem.type}
                      name={elem.name}
                      required={elem?.required ? true : false}
                      className='text-black ml-1'
                    />
                  </label>
                </div>
              );
            }

            return (
              <div key={elem.name} className='w-full'>
                <label htmlFor={elem.name}>{elem.label}</label>
                <input
                  type={elem.type}
                  name={elem.name}
                  required={elem?.required ? true : false}
                  className='text-black rounded-md px-1 py-2 w-full'
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </form>
      </article>
    </section>
  );
};

export default Home;
