import { useState } from "react";
import { destinos } from "../../data/destinos/destinos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importa todos los detalles
import { detalleParis } from "../../data/destinos/Detalle/Paris";
import { detalleRoma } from "../../data/destinos/Detalle/Roma";
import { detalleBsAs } from "../../data/destinos/Detalle/BsAs";
import { detalleNY } from "../../data/destinos/Detalle/NY";
import { detalleRio } from "../../data/destinos/Detalle/Rio";
import { detalleCairo } from "../../data/destinos/Detalle/Cairo";
import { detalleTokio } from "../../data/destinos/Detalle/Tokio";
import { detalleReikiavik } from "../../data/destinos/Detalle/Reikiavik";
import { detalleBail } from "../../data/destinos/Detalle/Bail";

import { DetalleModal } from "./DetalleModal";

interface DestinoDetalle {
  nombre: string;
  descripcion: string;
  textoDetallado: string;
  imagenes: string[];
}

export const TopDestinos = () => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<DestinoDetalle | null>(null);

  // Mapeo entre nombre y detalle
  const detallesMap: Record<string, DestinoDetalle> = {
    "París": detalleParis,
    "Roma": detalleRoma,
    "Buenos Aires": detalleBsAs,
    "Nueva York": detalleNY,
    "Río de Janeiro": detalleRio,
    "El Cairo": detalleCairo,
    "Tokio": detalleTokio,
    "Reikiavik": detalleReikiavik,
    "Bail": detalleBail,
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3D63] mb-6 sm:mb-10">
          Top Destinos
        </h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {destinos
            .filter((d) => d.destacado)
            .map((destino, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
                  <img
                    src={destino.imagen}
                    alt={destino.nombre}
                    className="w-full h-[420px] sm:h-[400px] lg:h-[300px] object-cover"
                  />
                  <div className="p-4 sm:p-6 text-left flex flex-col flex-grow">
                    <h3 className="font-montserrat text-base sm:text-lg md:text-xl font-semibold text-[#1A3D63] mb-2">
                      {destino.nombre}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                      {destino.descripcion}
                    </p>
                    <button
                      onClick={() => setDestinoSeleccionado(detallesMap[destino.nombre])}
                      className="font-montserrat font-bold text-xs sm:text-sm md:text-base bg-[#1A3D63] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#1A3D63]/90 transition"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Modal */}
      <DetalleModal
        destino={destinoSeleccionado}
        onClose={() => setDestinoSeleccionado(null)}
      />
    </section>
  );
};
