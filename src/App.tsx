import { Header } from "../src/Components/layout/header";
import { Hero } from "../src/Components/layout/hero";
import { Footer } from "./Components/layout/Footer";
import { SocialProof } from "./Components/sections/SocialProof";
import { TopDestinos } from "./Components/sections/TopDestinos";
import { Marcas } from "./Components/sections/Marcas";
import { Paquetes } from "./Components/sections/Paquetes";
import { Contacto } from "./Components/sections/Contacto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Header />
      s
      <section id="hero"><Hero /></section>
      <section id="destinos"><TopDestinos /></section>
      <section id="marcas"><Marcas /></section>
      <section id="socialproof"><SocialProof /></section>
      <section id="paquetes"><Paquetes /></section>
      <section id="contacto"><Contacto /></section>
      <Footer />
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

