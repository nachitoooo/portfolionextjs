"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

emailjs.init("4BPTkRIrNJ6skOKTE");

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const emailParams = {
        to_email: 'ignacioaristegui025@gmail.com',
        from_name: name,
        from_email: email,
        message: message,
      };
  
      emailjs.send('service_0eo1gci', 'template_vrlk6mh', emailParams)
        .then((response) => {
          console.log('Correo electrónico enviado con éxito:', response);
  
          // Muestra la alerta de éxito
          Swal.fire({
            icon: 'success',
            title: 'Email sent successfully',
            text: 'Your message has been sent successfully.',
            confirmButtonColor: '#28a745', 
          });
  
         
  
          // Limpia los campos del formulario después de enviar el correo
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });
    };
  
    return (
      <div className="bg-black text-white p-8 mt-12">
        <h3 className="text-4xl font-bold mb-6 text-center">Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder='¡Hello, Ignacio! I want to work with you.'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-1000"
          >
            send message
          </button>
        </form>

      </div>
      

    );
  }
  