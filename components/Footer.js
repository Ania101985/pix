import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-800 via-pink-00 to-fuchsia-800 text-white pt-0">
      {/* SVG decorativo superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,74.7C672,96,768,128,864,117.3C960,107,1056,53,1152,48C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
            🎮 Pix Adventures
          </h2>
          <p className="text-sm text-white/80">
            Aprende programación jugando con cursos divertidos y gamificados para niñas y niños.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#cursos" className="hover:underline">Cursos</a></li>
            <li><a href="#precios" className="hover:underline">Precios</a></li>
            <li><a href="#faq" className="hover:underline">Preguntas Frecuentes</a></li>
            <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Suscríbete</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu email"
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition"
            >
              Recibir novedades
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/60 py-4 border-t border-white/20">
        © 2025 Pix Adventures. Todos los derechos reservados.
      </div>
    </footer>
  );
}
