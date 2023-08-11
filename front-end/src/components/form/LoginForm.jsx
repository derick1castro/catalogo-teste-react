import React, { useState } from "react";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

function LoginAdminForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Email inválido");
    } else if (password.trim() === "") {
      setErrorMessage("Senha não pode estar vazia");
    } else {
      setErrorMessage("");
      alert("Login bem-sucedido!");
      navigate("/lista-carros");
    }

    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col w-full">
      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o seu e-mail"
        handleOnChange={(e) => setEmail(e.target.value)}
      />

      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        handleOnChange={(e) => setPassword(e.target.value)}
      />
      {showErrorMessage && (
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
      )}
      <button
        className="rounded-lg font-bold text-black py-3 w-full bg-[#6bbef9] hover:bg-[#2d6fa5] transition ease-out duration-400 cursor-pointer"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
}

export default LoginAdminForm;
