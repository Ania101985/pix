import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md mb-6">
      {/* Avatar + Nombre */}
      <div className="flex items-center gap-4">
        <img
          src="/pix-avatar.png"
          alt="Avatar de Mario"
          className="w-16 h-16 rounded-full border-4 border-purple-400"
        />
        <div>
          <h2 className="text-xl font-bold text-purple-700">¡Hola, Mario!</h2>
          <p className="text-sm text-gray-500">Nivel 3 • Explorador Lógico</p>
        </div>
      </div>

      {/* Monedas + Botón */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-yellow-200 px-3 py-1 rounded-full shadow-inner">
          <span className="text-yellow-800 font-bold text-lg">💰 240</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-xl transition-all shadow-lg">
          ¡Continuar Aventura!
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
