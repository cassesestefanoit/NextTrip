# NextTrip ✈️🌍

**NextTrip** es un proyecto desarrollado en **React + Vite + TypeScript + TailwindCSS** que simula una plataforma de viajes moderna.  
El objetivo es recrear la experiencia de un sitio real de agencia de turismo, con secciones dinámicas, modales de contacto y animaciones, pero sin conexión a un backend ni lógica de reservas.  

---

## 🚀 Características principales

- **Hero animado con GSAP**: títulos y textos que aparecen con efecto *split text* y botones de acción.
- **Sección Top Destinos**: tarjetas con imágenes, responsive y con modal de detalle.
- **Paquetes de viaje**: cards estilo folleto con flip estático cada 10 segundos y modal con información ampliada.
- **Modal de contacto unificado**: todos los botones de contacto abren el mismo flujo, con validación y notificaciones elegantes (React Toastify).
- **Testimonios animados**: contenedores fluidos con motion.
- **Marcas**: carrusel infinito con animación *marquee*.
- **Footer y navegación**: diseño minimalista, coherente con la identidad visual.

---

## 🛠️ Tecnologías utilizadas

- **React + Vite** → entorno rápido y modular.
- **TypeScript** → tipado seguro y mantenible.
- **TailwindCSS** → estilos responsivos y utilitarios.
- **GSAP** → animaciones fluidas y modernas.
- **React Toastify** → notificaciones de éxito y error.
- **React Masonry** → grilla dinámica para imágenes en modales.

---

## ⚙️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/nexttrip.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build



🎯 Por qué es un simulador
Este proyecto no conecta con APIs ni bases de datos reales. Toda la información de destinos y paquetes está en archivos locales (src/data). Los formularios de contacto muestran notificaciones de éxito/error, pero no envían datos a un servidor.
👉 De esta forma, NextTrip funciona como un simulador de agencia de viajes online, ideal para mostrar diseño, interacción y experiencia de usuario, sin necesidad de infraestructura backend.
👨‍💻 Autor
Proyecto desarrollado por Stefano, como práctica de UI/UX, branding y simulación de plataforma digital de viajes.

URL: https://n-extrip.netlify.app/
