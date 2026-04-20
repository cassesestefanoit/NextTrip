import "../../styles/Marcas.css";
import { marcas } from "../../data/Marcas";
import "../../styles/marcas.css";

export const Marcas = () => {
  return (
    <section className="bg-[#1A3D63] py-8 sm:py-12">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-fraunces font-bold text-white text-center mb-4 sm:mb-6">
        Las marcas que nos eligen día a día
      </h1>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marcas.map((m) => {
            const Icono = m.icono;
            return (
              <div
                key={m.id}
                className="inline-block mx-3 sm:mx-6 bg-white rounded-xl shadow-md px-3 sm:px-6 py-2 sm:py-4 text-[#1A3D63] flex items-center space-x-2 sm:space-x-3"
              >
                <Icono size={20} className="sm:w-6 sm:h-6" />
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  {m.nombre}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
