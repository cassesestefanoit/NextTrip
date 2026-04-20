import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ContactoModal } from "../sections/ContactoModal";
import heroImg from "../../assets/Hero.jpg"

export const Hero = () => {
  const [openContact, setOpenContact] = useState(false);

  useLayoutEffect(() => {
    const letters = document.querySelectorAll(".split span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  // Función para dividir texto en letras y mantener espacios
  const splitText = (text: string) =>
    text.split("").map((char, i) =>
      char === " " ? (
        <span key={i}>&nbsp;</span>
      ) : (
        <span key={i} className="inline-block">
          {char}
        </span>
      )
    );

  // Función para scroll a la sección paquetes
  const scrollToPaquetes = () => {
    const section = document.getElementById("paquetes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center pt-28">
      {/* Background */}
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content con overlay detrás */}
      <div className="relative text-center px-6">
        <div className="inline-block bg-black/25 rounded-lg px-6 py-6 max-w-2xl">
          <h2 className="font-fraunces text-2xl md:text-4xl font-bold text-white mb-6 split">
            {splitText("TU PRÓXIMO VIAJE LO ENCONTRAS ACÁ")}
          </h2>
          <p className="font-inter text-base md:text-xl text-white mb-4 split">
            {splitText("Planificá, compará y reservá en minutos.")}
          </p>
          <p className="font-inter text-base md:text-xl text-white mb-6 split">
            {splitText("Todo lo que necesitás, lo encontras en")}
          </p>
          <h1 className="font-fraunces text-2xl md:text-4xl font-bold text-white mb-6 split">
            {splitText("NextTrip.")}
          </h1>
          {/* Botones lado a lado */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setOpenContact(true)}
              className="font-montserrat font-bold text-sm md:text-base bg-[#1A3D63] text-white px-5 py-3 rounded-2xl transition hover:bg-white hover:text-black border border-[#1A3D63]"
            >
              Armar mi viaje
            </button>
            <button
              onClick={scrollToPaquetes}
              className="font-montserrat font-bold text-sm md:text-base bg-white text-black px-5 py-3 rounded-2xl transition hover:bg-[#1A3D63] hover:text-white border border-[#1A3D63]"
            >
              Buscar el mejor paquete para vos
            </button>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      <ContactoModal open={openContact} onClose={() => setOpenContact(false)} />
    </section>
  );
};
