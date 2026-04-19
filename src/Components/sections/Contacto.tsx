import { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { toast } from "react-toastify";

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) {
      toast.error("Por favor complete todos los campos.");
      return;
    }

    toast.success("Mensaje enviado correctamente. Lo contactaremos a la brevedad.");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section className="py-12 sm:py-16 bg-[#1A3D63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* Columna izquierda */}
        <div>
          <div className="flex items-center mb-4 sm:mb-6">
            <FaLocationPin className="text-[#1A3D63] mr-2 text-xl sm:text-2xl bg-white rounded-full p-1" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Ubicación</h2>
          </div>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
            Brandsen 805, Ciudad Autónoma de Buenos Aires
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Síguenos</h2>
          <div className="flex space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <IoLogoInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <BsTwitterX />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Formulario de Contacto</h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A3D63] text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A3D63] text-sm sm:text-base"
            />
            <textarea
              placeholder="Ingrese su mensaje"
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A3D63] text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-[#1A3D63] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
