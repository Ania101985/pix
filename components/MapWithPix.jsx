// components/MapWithPix.js
import Image from 'next/image';

const pixItems = [
  {
    name: 'SCRATCHJR',
    img: '/images/pixlabel2/pixlabel1.png',
    style: { top: '79%', left: '35%', width: 160, height: 60, fontSize: 16 },
  },
  {
    name: 'SCRATCH INTERMEDIO',
    img: '/images/pixlabel2/pixlabel2.png',
    style: { top: '57%', left: '57%', width: 180, height: 65, fontSize: 16 },
  },
  {
    name: 'ALFABETIZACIÓN DIGITAL',
    img: '/images/pixlabel2/pixlabel3.png',
    style: { top: '82%', left: '55%', width: 200, height: 70, fontSize: 15 },
  },
  {
    name: 'MAKECODE ARCADE',
    img: '/images/pixlabel2/pixlabel4.png',
    style: { top: '16%', left: '62%', width: 180, height: 60, fontSize: 16 },
  },
  {
    name: 'APP INVENTOR',
    img: '/images/pixlabel2/pixlabel5.png',
    style: { top: '40%', left: '83%', width: 160, height: 60, fontSize: 16 },
  },
  {
    name: 'HTML & CSS',
    img: '/images/pixlabel2/pixlabel6.png',
    style: { top: '30%', left: '32%', width: 160, height: 55, fontSize: 15 },
  },
  {
    name: 'PYTHON',
    img: '/images/pixlabel2/pixlabel7.png',
    style: { top: '72%', left: '75%', width: 160, height: 55, fontSize: 15 },
  },
  {
    name: 'JAVASCRIPT',
    img: '/images/pixlabel2/pixlabel8.png',
    style: { top: '40%', left: '13%', width: 140, height: 60, fontSize: 15 },
  },
  {
    name: 'SCRATCH BÁSICO',
    img: '/images/pixlabel2/pixlabel9.png',
    style: { top: '49%', left: '39%', width: 140, height: 55, fontSize: 15 },
  },
];

export default function MapWithPix() {
  return (
    <div className="relative w-full h-[800px] sm:h-[1000px] overflow-hidden font-sans my-16">
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="w-full h-full object-cover"
      />

      {pixItems.map((pix, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center z-30"
          style={{
            top: pix.style.top,
            left: pix.style.left,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Cartel */}
          <div
            className="flex items-center justify-center text-white font-bold text-center border-white border-[2px] rounded-xl px-2 shadow-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              width: `${pix.style.width}px`,
              height: `${pix.style.height}px`,
              fontSize: `${pix.style.fontSize}px`,
              lineHeight: '1.1',
            }}
          >
            {pix.name}
          </div>

          {/* Imagen del Pix */}
          <Image
            src={pix.img}
            alt={pix.name}
            width={100}
            height={100}
            className="mt-[-10px]"
          />
        </div>
      ))}
    </div>
  );
}
