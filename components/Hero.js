// components/Hero.js

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Aprende programación <br />{" "}
            <span className="text-yellow-300">jugando desde los 6 años</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 drop-shadow-md">
            Con cursos divertidos, retos gamificados y personajes que acompañan el aprendizaje, ¡los niños se convierten en creadores digitales!
          </p>
          <a
            href="#cursos"
            className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-xl text-lg hover:bg-yellow-100 transition"
          >
            🚀 Empieza la aventura
          </a>
        </div>

        {/* Video   en lugar de imagen */}
        <div className="lg:w-1/2 flex justify-center">
          <video
            src="/videos/pix-chaos.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-md rounded-3xl border-4 border-white shadow-2xl"
          />
        </div>
      </div>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 pointer-events-none"></div>
    </section>
  );
}
