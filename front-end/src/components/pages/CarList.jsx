import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import { IoIosStar } from "react-icons/io";

function CarList() {
  const [carros, setCarros] = useState([]);
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (carId) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.includes(carId)
        ? prevFavoritos.filter((id) => id !== carId)
        : [...prevFavoritos, carId]
    );
  };

  const fetchCarros = async () => {
    try {
      const response = await api.get("carros");
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  };

  useEffect(() => {
    fetchCarros();
  }, []);

  const filteredCarros = carros.filter(
    (car) =>
      car.modelo.toLowerCase().includes(busca.toLowerCase()) ||
      car.marca.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section>
      <div className="flex flex-col items-center my-10">
        <h1 className="text-4xl font-bold text-black">Lista de Carros</h1>
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border-2 border-black mt-8 lg:mt-10 rounded-3xl w-[20rem] md:w-[30rem] lg:w-[35rem] px-3 py-[0.4rem]"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCarros.map((car) => (
          <section
            className="w-96 h-full flex rounded-lg m-5 shadow-xl bg-white"
            key={car.id}
          >
            <div className="w-40 flex rounded-lg justify-center items-center bg-gray relative">
              <IoIosStar
                onClick={() => toggleFavorito(car.id)}
                className={`absolute top-2 right-2 text-xl ${
                  favoritos.includes(car.id) ? "text-yellow" : "text-white"
                } z-10 cursor-pointer transition-colors duration-300`}
              />
              <img
                src={car.img}
                alt="Carros a serem vendidos"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col mt-3 mx-4 text-black">
              <span className="font-bold">Modelo: {car.modelo}</span>
              <span className="text-sm font-semibold text-placeholder">
                Marca: {car.marca} | Ano: {car.ano}
              </span>
              <span className="text-lg mt-2 font-bold ">
                Preço: {car.preco}
              </span>
              <div className="flex my-3 justify-between">
                <button className="text-black bg-[#6bbef9] hover:bg-[#2d6fa5] duration-400 transition font-bold ease-in-out py-1 px-2 max-w-[95px] rounded-lg text-xs">
                  <Link to={`/carros/${car.id}`}>Saber mais</Link>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default CarList;
