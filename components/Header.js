export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-700">Pix Adventures</h1>
      <nav className="space-x-6 text-sm sm:text-base">
        <a href="#" className="text-gray-700 hover:text-purple-600">Cursos</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Cómo Funciona</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Planes</a>
        <button className="ml-4 px-4 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
          Iniciar sesión
        </button>
      </nav>
    </header>
  );
}
