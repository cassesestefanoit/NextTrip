import { useState } from "react";
import { toast } from "react-toastify";

interface ContactoModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactoModal = ({ open, onClose }: ContactoModalProps) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!nombre || !email || !mensaje) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    // Simulación de envío
    toast.success("¡Tu mensaje fue enviado con éxito!");
    setNombre("");
    setEmail("");
    setMensaje("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#1A3D63]">Formulario de Contacto</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A3D63]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A3D63]"
          />
          <textarea
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A3D63]"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-[#1A3D63] text-white px-4 py-2 rounded-lg hover:bg-[#1A3D63]/90 transition w-full"
          >
            Enviar
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-600 hover:text-[#1A3D63]"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
