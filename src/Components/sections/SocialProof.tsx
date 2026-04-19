import { FaSmile, FaStar, FaHeadphones, FaCalendar } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";

export const SocialProof = () => {
  return (
    <section className="relative py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        
        {/* Columna izquierda: imagen + overlay centrado */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full sm:w-3/4">
            <img
              src="/src/assets/MapaMundi.png"
              alt="Mapamundi"
              className="w-full h-auto object-contain rounded-lg shadow-lg opacity-80"
            />
            {/* Overlay con texto centrado en la imagen */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 rounded-lg p-4 sm:p-6 text-center w-[90%]">
                <h2 className="font-fraunces text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  MILES DE VIAJEROS YA NOS ELIGEN
                </h2>
                <p className="font-inter text-xs sm:text-sm md:text-base text-white">
                  Sumate a quienes confían en nosotros para descubrir el mundo de forma simple, segura y sin complicaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Contadores debajo de la imagen */}
          <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-[#1A3D63] w-full">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <FaSmile className="text-2xl sm:text-3xl text-[#1A3D63]" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold leading-none">+15K</span>
              </div>
              <p className="font-inter text-sm sm:text-base md:text-lg font-bold mt-2 text-center">
                Viajeros felices y satisfechos
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <FaStar className="text-2xl sm:text-3xl text-[#1A3D63]" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold leading-none">+10</span>
              </div>
              <p className="font-inter text-sm sm:text-base md:text-lg font-bold mt-2 text-center">
                Años de experiencia comprobada
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <BiSolidBank className="text-2xl sm:text-3xl text-[#1A3D63]" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold leading-none">+50</span>
              </div>
              <p className="font-inter text-sm sm:text-base md:text-lg font-bold mt-2 text-center">
                Destinos en las principales ciudades del mundo
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: beneficios con más espacio */}
        <div className="flex flex-col space-y-6 sm:space-y-10">
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition">
            <MdOutlineTravelExplore className="text-[#1A3D63] text-4xl sm:text-5xl lg:text-6xl flex-shrink-0" />
            <div>
              <h3 className="font-montserrat text-base sm:text-lg md:text-xl font-semibold text-[#1A3D63] mb-2">
                Experiencia Local
              </h3>
              <p className="font-inter text-xs sm:text-sm md:text-base text-gray-600">
                Nuestros expertos locales crean experiencias únicas con conocimientos internos que no encontrarás en tours típicos.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition">
            <FaCalendar className="text-[#1A3D63] text-4xl sm:text-5xl lg:text-6xl flex-shrink-0" />
            <div>
              <h3 className="font-montserrat text-base sm:text-lg md:text-xl font-semibold text-[#1A3D63] mb-2">
                Reserva todo en un solo lugar
              </h3>
              <p className="font-inter text-xs sm:text-sm md:text-base text-gray-600">
                Reservá de forma sencilla y rápida, ya sea para escapadas rápidas o vacaciones planificadas.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 hover:shadow-lg transition">
            <FaHeadphones className="text-[#1A3D63] text-4xl sm:text-5xl lg:text-6xl flex-shrink-0" />
            <div>
              <h3 className="font-montserrat text-base sm:text-lg md:text-xl font-semibold text-[#1A3D63] mb-2">
                Soporte 24/7
              </h3>
              <p className="font-inter text-xs sm:text-sm md:text-base text-gray-600">
                Estamos disponibles en cualquier momento y lugar. Obtené ayuda en tiempo real cuando la necesites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
