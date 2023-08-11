import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../UI/Navbar";
import api from "../../utils/api";

function CarDetails() {
  const { id } = useParams();
  const [carros, setCarros] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");

  const fetchCarData = async () => {
    try {
      const response = await api.get(`/carros/${id}`);
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao carregar os dados do carro:", error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [token, id]);

  return (
    <div className="h-screen bg-gray-200">
      <Navbar />
      <section className="bg-[#666666]">
        <div className="flex flex-col items-center pt-8 space-y-3">
          <h1 className="font-bold text-4xl text-white">
            {carros.marca} {carros.modelo}
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 px-5 lg:px-8">
          <div className="lg:pr-10">
            <p className="text-xl pt-8 lg:pt-0 font-medium text-white">
              {carros.descricao}
            </p>
          </div>
          <div className="w-full">
            <img className="w-full lg:max-w-[450px]" src={carros.img} alt="" />
          </div>
        </div>
      </section>

      <section className="pt-10 px-5 lg:px-8 flex space-x-10 lg:space-x-44">
        <div>
          <h2 className="text-4xl font-bold text-black">Características</h2>
          <p className="my-8 text-xl text-gray-800 xl:max-w-[80rem]">
            {carros.caracteristicas}
          </p>
        </div>
      </section>

      <footer className="flex flex-col justify-center items-center py-8 bg-[#666666] space-y-6">
        <div className="text-xl font-bold flex flex-col items-center text-white">
          <span className="pb-4">Vamos realizar um test driver?</span>
          <span className="mx-3">Agende um horário conosco!</span>
        </div>
        <div className="font-bold">
          <button className="text-white bg-[#6bbef9] hover:bg-[#2d6fa5] duration-400 transition font-bold ease-in-out py-3 px-4 rounded-lg mt-4 text-base xl:text-lg">
            <Link to="/carros">Solicitar demonstração</Link>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default CarDetails;
