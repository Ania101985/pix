// components/MapWithPix.js
import Image from 'next/image';

const pixItems = [
  {
    name: 'SCRATCHJR',
    img: '/images/pixlabel2/pixlabel1.png',
    style: { top: '79%', left: '35%' },
  },
  {
    name: 'SCRATCH INTERMEDIO',
    img: '/images/pixlabel2/pixlabel2.png',
    style: { top: '57%', left: '57%' },
  },
  {
    name: 'ALFABETIZACIÓN DIGITAL',
    img: '/images/pixlabel2/pixlabel3.png',
    style: { top: '82%', left: '55%' },
  },
  {
    name: 'MAKECODE ARCADE',
    img: '/images/pixlabel2/pixlabel4.png',
    style: { top: '16%', left: '62%' },
  },
  {
    name: 'APP INVENTOR',
    img: '/images/pixlabel2/pixlabel5.png',
    style: { top: '40%', left: '83%' },
  },
  {
    name: 'HTML & CSS',
    img: '/images/pixlabel2/pixlabel6.png',
    style: { top: '30%', left: '32%' },
  },
  {
    name: 'PYTHON',
    img: '/images/pixlabel2/pixlabel7.png',
    style: { top: '72%', left: '75%' },
  },
  {
    name: 'JAVASCRIPT',
    img: '/images/pixlabel2/pixlabel8.png',
    style: { top: '40%', left: '13%' },
  },
  {
    name: 'SCRATCH BÁSICO',
    img: '/images/pixlabel2/pixlabel9.png',
    style: { top: '49%', left: '39%' },
  },
];

export default function MapWithPix() {
  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/9] my-12 overflow-hidden">
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="absolute inset-0 w-full h-full object-cover z-0"
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
          <div
            className="bg-black bg-opacity-70 text-white text-center px-2 py-1 rounded-lg text-[10px] sm:text-sm md:text-base font-semibold shadow-md border border-white"
          >
            {pix.name}
          </div>

          <Image
            src={pix.img}
            alt={pix.name}
            width={60}
            height={60}
            className="mt-[-8px] sm:mt-[-10px]"
          />
        </div>
      ))}
    </section>
  );
}
