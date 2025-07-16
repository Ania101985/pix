'use client'; // Ensure this is a client component for interactivity

import { useState } from 'react';
import Image from 'next/image';

const pixItems = [
  {
    name: 'SCRATCHJR',
    img: '/images/pixlabel2/pixlabel1.png',
    tooltip: 'Introducción a la programación para niños pequeños.',
    style: { top: '79%', left: '33%' },
  },
  {
    name: 'SCRATCH INTERMEDIO',
    img: '/images/pixlabel2/pixlabel2.png',
    tooltip: 'Proyectos más complejos con Scratch.',
    style: { top: '57%', left: '57%' },
  },
  {
    name: 'ALFABETIZACIÓN DIGITAL',
    img: '/images/pixlabel2/pixlabel3.png',
    tooltip: 'Uso básico de computadoras e internet.',
    style: { top: '82%', left: '55%' },
  },
  {
    name: 'MAKECODE ARCADE',
    img: '/images/pixlabel2/pixlabel4.png',
    tooltip: 'Crea videojuegos con bloques y JavaScript.',
    style: { top: '16%', left: '62%' },
  },
  {
    name: 'APP INVENTOR',
    img: '/images/pixlabel2/pixlabel5.png',
    tooltip: 'Desarrolla apps móviles con bloques.',
    style: { top: '40%', left: '83%' },
  },
  {
    name: 'HTML & CSS',
    img: '/images/pixlabel2/pixlabel6.png',
    tooltip: 'Diseña y estructura páginas web.',
    style: { top: '30%', left: '32%' },
  },
  {
    name: 'PYTHON',
    img: '/images/pixlabel2/pixlabel7.png',
    tooltip: 'Aprende programación con Python.',
    style: { top: '72%', left: '75%' },
  },
  {
    name: 'JAVASCRIPT',
    img: '/images/pixlabel2/pixlabel8.png',
    tooltip: 'Crea interactividad en páginas web.',
    style: { top: '40%', left: '13%' },
  },
  {
    name: 'SCRATCH BÁSICO',
    img: '/images/pixlabel2/pixlabel9.png',
    tooltip: 'Inicia con la programación visual.',
    style: { top: '49%', left: '39%' },
  },
];

export default function MapWithPix() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleLabelClick = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/9] my-12">
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {pixItems.map((pix, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center z-10"
          style={{
            top: pix.style.top,
            left: pix.style.left,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Label and tooltip */}
          <div className="relative group">
            <div
              className="bg-black bg-opacity-70 text-white text-center px-2 py-1 rounded-lg text-[9px] sm:text-sm md:text-base font-semibold shadow-md border border-white cursor-pointer"
              onClick={() => handleLabelClick(index)}
              onMouseEnter={() => setActiveTooltip(index)} // for desktop
              onMouseLeave={() => setActiveTooltip(null)}  // for desktop
            >
              {pix.name}
            </div>

            {activeTooltip === index && (
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-white text-black text-xs p-2 rounded shadow-lg w-40 text-center z-20 transition-opacity duration-200">
                {pix.tooltip}
              </div>
            )}
          </div>

          <Image
            src={pix.img}
            alt={pix.name}
            width={40}
            height={40}
            className="mt-[-6px] sm:mt-[-10px] sm:w-[60px] sm:h-[60px]"
          />
        </div>
      ))}
    </section>
  );
}
