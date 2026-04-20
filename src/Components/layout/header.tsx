import { useState } from "react";
import { ContactoModal } from "../sections/ContactoModal"; 

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img
              src="../../assets/Logo.png"
              alt="NextTrip Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <h1 className="font-fraunces text-lg sm:text-2xl font-bold mt-1">
              NextTrip
            </h1>
          </div>

          {/* Nav Desktop */}
          <nav className="hidden md:flex gap-4 lg:gap-6 font-inter font-bold text-base lg:text-xl text-black">
            <a href="#hero" className="hover:text-[#1A3D63]">Home</a>
            <a href="#destinos" className="hover:text-[#1A3D63]">Destinos</a>
            <a href="#paquetes" className="hover:text-[#1A3D63]">Paquetes</a>
            <a href="#marcas" className="hover:text-[#1A3D63]">Nosotros</a>
            <a href="#contacto" className="hover:text-[#1A3D63]">Contacto</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setOpenContact(true)}
              className="font-montserrat font-bold bg-[#1A3D63] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#1A3D63]/90 transition text-sm sm:text-base"
            >
              Book Now
            </button>

            {/* Botón menú mobile */}
            <button
              className="md:hidden text-black font-bold"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Nav Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 flex flex-col gap-4 text-black font-inter font-bold text-lg">
            <a href="#hero" className="hover:text-[#1A3D63]">Home</a>
            <a href="#destinos" className="hover:text-[#1A3D63]">Destinos</a>
            <a href="#paquetes" className="hover:text-[#1A3D63]">Paquetes</a>
            <a href="#marcas" className="hover:text-[#1A3D63]">Nosotros</a>
            <a href="#contacto" className="hover:text-[#1A3D63]">Contacto</a>
          </div>
        )}
      </header>

      {/* Modal de contacto */}
      <ContactoModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};
