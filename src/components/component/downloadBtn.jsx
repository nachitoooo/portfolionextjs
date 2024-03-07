"use client";
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadBtn = () => {
  const handleDownload = async () => {
    try {
      const pdfUrl = 'cv/cvingles.pdf'; // Asegúrate de tener la ruta correcta al archivo PDF

      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'cvingles.pdf'; // Nombre de descarga del archivo

      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      <FaDownload className="mr-2" /> {/* Ícono de descarga */}
    </button>
  );
};

export default DownloadBtn;