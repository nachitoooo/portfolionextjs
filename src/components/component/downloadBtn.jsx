"use client";
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center bg-green-500 text-white font-bold px-3 py-1 rounded-full transition-transform duration-1000 ease-in-out transform ${isHovered ? 'scale-110' : ''}`}
    >
      <FaDownload className={`mr-2 ${isHovered ? 'animate-bounce' : ''}`} />
      {isHovered && <span className="ml-1 bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">CV</span>}
    </button>
  );
};

export default DownloadBtn;