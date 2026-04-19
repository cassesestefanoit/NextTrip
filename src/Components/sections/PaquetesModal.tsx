import { useState } from "react";
import { ContactoModal } from "../sections/ContactoModal"; // importa el modal

interface Paquete {
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

interface PaquetesModalProps {
  paquete: Paquete | null;
  onClose: () => void;
}

export const PaquetesModal: React.FC<PaquetesModalProps> = ({ paquete, onClose }) => {
  const [openContact, setOpenContact] = useState(false);

  if (!paquete) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2 sm:px-4">
        <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3D63]">
              {paquete.titulo}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-bold text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>

          {/* Descripción */}
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            {paquete.descripcion}
          </p>

          {/* Imagen */}
          <div className="overflow-hidden rounded-lg shadow-md mb-4">
            <img
              src={paquete.imagen}
              alt={paquete.titulo}
              className="w-full object-cover"
            />
          </div>

          {/* Precio */}
          <p className="font-bold text-[#1A3D63] text-lg sm:text-xl mb-6">
            ${paquete.precio}
          </p>

          {/* Botón contacto */}
          <div className="text-center">
            <button
              onClick={() => setOpenContact(true)}
              className="bg-[#1A3D63] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#1A3D63]/90 transition text-sm sm:text-base"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      <ContactoModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};
