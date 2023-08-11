import React from "react";
import LoginForm from "../form/LoginForm";

function Login() {
  return (
    <main className="bg-[#666666]">
      <section className="h-screen flex justify-center items-center sm:pb-[5rem] lg:pb-0 lg:pl-16">
        <div className="border border-[#6bbef9] rounded-lg lg:rounded-r-none md:w-[550px] md:justify-center md:h-[700px] items-center flex flex-col">
          <div className="p-6 md:w-[332px] border border-[#6bbef9] rounded-lg lg:rounded-lg">
            <h1 className="text-2xl font-bold pb-5">Login</h1>
            <LoginForm />
          </div>
        </div>
        {/* Removendo a imagem para as resoluções menores */}
        <div className="hidden lg:flex md:h-[700px] rounded-r-lg">
          <img
            className="lg:w-[650px] lg:h-[700px] max-w-[90%] rounded-r-lg"
            src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Foto de um carro esportivo"
          />
        </div>
      </section>
    </main>
  );
}

export default Login;
