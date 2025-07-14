import { Home, BookOpen, DollarSign, HelpCircle } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow md:hidden">
      <div className="flex justify-around items-center py-2">
        <a href="#hero" className="flex flex-col items-center text-sm text-gray-600 hover:text-purple-600">
          <Home className="w-6 h-6" />
          Inicio
        </a>
        <a href="#cursos" className="flex flex-col items-center text-sm text-gray-600 hover:text-purple-600">
          <BookOpen className="w-6 h-6" />
          Cursos
        </a>
        <a href="#precios" className="flex flex-col items-center text-sm text-gray-600 hover:text-purple-600">
          <DollarSign className="w-6 h-6" />
          Precios
        </a>
        <a href="#faq" className="flex flex-col items-center text-sm text-gray-600 hover:text-purple-600">
          <HelpCircle className="w-6 h-6" />
          FAQ
        </a>
      </div>
    </nav>
  );
}
