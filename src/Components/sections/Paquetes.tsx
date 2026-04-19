import { useState, useEffect } from "react";
import { paquetes } from "../../data/paquetes";
import { motion, AnimatePresence } from "framer-motion";
import { PaquetesModal } from "./PaquetesModal";
import type { Paquete } from "../../types/paquete"; 

export const Paquetes = () => {
  const [index, setIndex] = useState(0);
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState<Paquete | null>(null);

  const visiblePaquetes = paquetes.slice(index, index + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % paquetes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-[#1A3D63] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10">
          Paquetes de Viaje
        </h2>

        <div style={{ perspective: "2000px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
            >
              {visiblePaquetes.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  {/* Imagen con aspect ratio */}
                  <div className="w-full aspect-[4/3] bg-gray-100">
                    <img
                      src={p.imagen}
                      alt={p.destino}
                      className="w-full h-full object-contain sm:object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-[#1A3D63] mb-3 sm:mb-4">
                      {p.destino}
                    </h3>
                    <button
                      onClick={() => setPaqueteSeleccionado(p)}
                      className="bg-[#1A3D63] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#1A3D63]/90 transition text-sm sm:text-base"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {paqueteSeleccionado && (
          <PaquetesModal
            paquete={paqueteSeleccionado}
            onClose={() => setPaqueteSeleccionado(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
