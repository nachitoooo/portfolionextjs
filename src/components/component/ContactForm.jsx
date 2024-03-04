"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

emailjs.init("4BPTkRIrNJ6skOKTE");

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailParams = {
      to_email: 'ignacioaristegui025@gmail.com', // Reemplaza con tu dirección de correo electrónico
      from_name: name,
      from_email: email,
      message: message,
    };

    // Envía el correo electrónico
    emailjs.send('service_0eo1gci', 'template_vrlk6mh', emailParams)
      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        // Puedes agregar lógica adicional aquí, como mostrar un mensaje de éxito al usuario.
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje de error al usuario.
      });
  };

  return (
    <div className="bg-white p-8 mt-12">
      <h3 className="text-2xl font-bold mb-6">Contacto</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
