import { useState } from "react";
import Masonry from "react-masonry-css";
import "../../styles/masonry.css";
import { ContactoModal } from "../sections/ContactoModal"; // importa el modal

interface DestinoDetalle {
  nombre: string;
  descripcion: string;
  textoDetallado: string;
  imagenes: string[];
}

interface DetalleModalProps {
  destino: DestinoDetalle | null;
  onClose: () => void;
}

export const DetalleModal: React.FC<DetalleModalProps> = ({ destino, onClose }) => {
  const [openContact, setOpenContact] = useState(false);

  if (!destino) return null;

  // Configuración de columnas según tamaño de pantalla
  const breakpointColumnsObj = {
    default: 3,
    1280: 3, // desktop grande
    1024: 2, // tablet horizontal
    640: 1,  // mobile
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2 sm:px-4">
        <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3D63]">
              {destino.nombre}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-bold text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>

          {/* Texto detallado */}
          <p className="text-gray-700 mb-4 sm:mb-6 whitespace-pre-line text-sm sm:text-base md:text-lg">
            {destino.textoDetallado}
          </p>

          {/* Masonry de imágenes */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {destino.imagenes.map((img) => (
              <div key={img} className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src={img}
                  alt={destino.nombre}
                  className="w-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </Masonry>

          {/* Botón extra */}
          <div className="mt-4 sm:mt-6 text-center">
            <button
              onClick={() => setOpenContact(true)}
              className="bg-[#1A3D63] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#1A3D63]/90 transition text-sm sm:text-base"
            >
              Hablar con un profesional
            </button>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      <ContactoModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};
