export const Footer = () => {
  return (
  <footer className="bg-[#1A3D63] text-white py-6 font-fraunces">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base mb-2">
          © 2026 CasseseStefano.IT - Todos los derechos reservados
        </p>
        <p className="text-sm md:text-base">
          Contacto:{" "}
          <a
            href="mailto:cassese.stefano.it@gmail.com"
            className="underline hover:text-gray-300"
          >
            cassese.stefano.it@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};
