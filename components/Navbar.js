// components/Navbar.js

export default function Navbar() {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-8 py-4 justify-between items-center">
      <div className="text-2xl font-bold text-purple-700">Pix Adventures</div>
      <ul className="flex space-x-6 text-gray-700 font-semibold">
        <li><a href="#hero" className="hover:text-purple-600">Inicio</a></li>
        <li><a href="#how-it-works" className="hover:text-purple-600">Cómo funciona</a></li>
        <li><a href="#cursos" className="hover:text-purple-600">Cursos</a></li>
        <li><a href="#precios" className="hover:text-purple-600">Precios</a></li>
        <li><a href="#faq" className="hover:text-purple-600">FAQ</a></li>
      </ul>
    </nav>
  )
}
