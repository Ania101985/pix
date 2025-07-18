import Link from 'next/link';

const levelStyles = {
  Inicial: {
    color: 'bg-green-400',
    icon: '🧸',
  },
  Básico: {
    color: 'bg-yellow-400',
    icon: '🚀',
  },
  Intermedio: {
    color: 'bg-orange-400',
    icon: '🎯',
  },
  Avanzado: {
    color: 'bg-red-400',
    icon: '🧠',
  },
};

export default function CourseCard({ title, image, slug, level = 'Básico' }) {
  const levelInfo = levelStyles[level] || levelStyles['Básico'];

  return (
    <div className="relative bg-white rounded-[30px] shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-4 border-dashed border-purple-300 animate-wiggle">
      
      {/* Badge de nivel */}
      <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-full shadow ${levelInfo.color}`}>
        {level}
      </span>

      {/* Imagen */}
      <div className="w-full h-44 flex justify-center items-center mb-4">
        <img
          src={`/images/${image}`}
          alt={title}
          className="object-contain max-h-full max-w-full rounded-xl border-4 border-yellow-200 shadow-inner bg-yellow-50"
        />
      </div>

      {/* Título con ícono */}
      <h3 className="text-xl font-extrabold text-purple-800 text-center mb-2 drop-shadow-sm">
        {levelInfo.icon} {title}
      </h3>

      {/* Botón */}
      <Link href={`/cursos/${slug}`}>
        <button className="mt-3 bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-pink-600 transition">
          Ver curso
        </button>
      </Link>
    </div>
  );
}
