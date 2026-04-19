// src/data/paquetes.ts
import paqueteParisImg from "../../src/assets/Paquetes/Paris.jpg";
import paqueteTokioImg from "../../src/assets/Paquetes/Tokio.jpg";
import paqueteNYImg from "../../src/assets/Paquetes/Ny.jpg";
import paqueteRioImg from "../../src/assets/Paquetes/Rio.jpg";
import paqueteRomaImg from "../../src/assets/Paquetes/Roma.jpg";
import buenosAiresImg from "../../src/assets/Paquetes/BsAs.jpg";

export const paquetes = [
  {
    id: 1,
    destino: "París, Francia",
    descripcion: "Una experiencia exclusiva en París que combina cultura, elegancia y momentos inolvidables: acceso preferencial al Louvre, crucero al atardecer por el Sena y un tour guiado por el encantador barrio de Montmartre.",
    precio: 1200,
    duracion: "5 días / 4 noches",
    imagen: paqueteParisImg,
    destacado: true,
  },
  {
    id: 2,
    destino: "Tokio, Japón",
    descripcion: "Una experiencia fascinante en Tokio que fusiona tradición y tecnología: visita a templos históricos, recorrido por barrios futuristas y una inmersión en la auténtica cultura japonesa.",
    precio: 1800,
    duracion: "7 días / 6 noches",
    imagen: paqueteTokioImg,
    destacado: true,
  },
  {
    id: 3,
    destino: "Nueva York, EE.UU.",
    descripcion: "Una experiencia exclusiva en Nueva York que une modernidad y cultura urbana: recorrido por Times Square, visita a Central Park y acceso a miradores con vistas inigualables de la ciudad.",
    precio: 950,
    duracion: "4 días / 3 noches",
    imagen: paqueteNYImg,
    destacado: false,
  },
  {
    id: 4,
    destino: "Río de Janeiro, Brasil",
    descripcion: "Una experiencia vibrante en Río de Janeiro que combina paisajes icónicos y cultura local: visita al Cristo Redentor, recorrido por el Pan de Azúcar y momentos únicos en las playas de Copacabana e Ipanema.",
    precio: 1100,
    duracion: "6 días / 5 noches",
    imagen: paqueteRioImg,
    destacado: true,
  },
  {
    id: 5,
    destino: "Roma, Italia",
    descripcion: "Una experiencia inolvidable en Roma que revive la historia y el arte: visita al Coliseo, recorrido por el Vaticano y paseo por plazas y fuentes que definen la esencia italiana.",
    precio: 1300,
    duracion: "5 días / 4 noches",
    imagen: paqueteRomaImg,
    destacado: true,
  },
  {
    id: 6,
    destino: "Buenos Aires, Argentina", 
    descripcion: "Una experiencia auténtica en Buenos Aires que combina cultura, historia y gastronomía: recorrido por barrios emblemáticos, show de tango y degustación de la reconocida cocina argentina.",
    precio: 1100, 
    duracion: "6 días / 5 noches",
    imagen: buenosAiresImg,
    destacado: true,
  },
];
