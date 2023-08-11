import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [nav, setNav] = useState(false);

  return (
    <nav className="flex justify-between py-4 sm:px-[80px] px-[60px] border-b border-borrow">
      <section className="flex items-center justify-between w-[100%] lg:w-[400px]">
        <div className="">
          <Link to="/lista-carros">
            <p className="font-bold text-xl">DC.Veículos</p>
          </Link>
        </div>
        <div>
          <AiOutlineMenu
            onClick={() => setNav(!nav)}
            size={30}
            className="block right-4 top-4 cursor-pointer lg:hidden"
          />
        </div>
      </section>

      {nav && (
        <div className="bg-black/95 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {nav && (
        <div className="fixed top-0 right-0 w-[300px] h-screen bg-blue z-10 duration-400">
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <img className="w-[150px] my-[30px]" src="" alt="" />
          <nav className="">
            <ul className="lg:flex flex-col space-y-10 lg:items-center text-center">
              <li className="cursor-pointer font-bold py-2 text-white hover:text-black hover:border-black transition ease-in-out duration-400 hover:border-b  mx-5">
                <Link to="/lista-carros">Lista de carros</Link>
              </li>
              <li className="cursor-pointer font-bold py-2 text-white hover:text-black hover:border-black transition ease-in-out duration-400  hover:border-b  mx-5">
                <Link to="/lista-carros">favoritos</Link>
              </li>
              <li
                className="cursor-pointer font-bold py-2 hover:text-black hover:border-black text-white transition ease-in-out duration-400 hover:border-b  mx-5"
                onClick={handleLogout}
              >
                Sair
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className="hidden lg:flex ">
        <ul className="lg:flex lg:items-center ">
          <li className="cursor-pointer font-bold py-2 text-black hover:text-[#2d6fa5] transition ease-in-out duration-400 hover:border-b hover:border-[#2d6fa5] mx-5 ">
            <Link to="/lista-carros">Lista de carros</Link>
          </li>
          <li className="cursor-pointer font-bold py-2 text-black hover:text-[#2d6fa5] transition ease-in-out duration-400 hover:border-b hover:border-[#2d6fa5] mx-5">
            <Link to="/lista-carros">favoritos</Link>
          </li>
          <li
            className="cursor-pointer font-bold py-2 text-black hover:text-[#2d6fa5] transition ease-in-out duration-400 hover:border-b hover:border-[#2d6fa5] mx-5"
            onClick={handleLogout}
          >
            Sair
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
