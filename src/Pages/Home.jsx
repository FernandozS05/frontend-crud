import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenidos al CRUD para el registro de productos y categorías
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Aplicación construida con Nest.js para el backend (desarrollo de la API RESTful) y React.js para el frontend (Interfaces).
        </p>
      </div>
    </div>
  );
}
