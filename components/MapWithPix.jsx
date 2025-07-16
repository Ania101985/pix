// components/MapWithPix.js
import Image from 'next/image';

const pixItems = [
  { name: 'SCRATCHJR', img: '/images/pixlabel2/pixlabel1.png', top: '79%', left: '35%' },
  { name: 'SCRATCH INTERMEDIO', img: '/images/pixlabel2/pixlabel2.png', top: '57%', left: '57%' },
  { name: 'ALFABETIZACIÓN DIGITAL', img: '/images/pixlabel2/pixlabel3.png', top: '82%', left: '55%' },
  { name: 'MAKECODE ARCADE', img: '/images/pixlabel2/pixlabel4.png', top: '16%', left: '62%' },
  { name: 'APP INVENTOR', img: '/images/pixlabel2/pixlabel5.png', top: '40%', left: '83%' },
  { name: 'HTML & CSS', img: '/images/pixlabel2/pixlabel6.png', top: '30%', left: '32%' },
  { name: 'PYTHON', img: '/images/pixlabel2/pixlabel7.png', top: '72%', left: '75%' },
  { name: 'JAVASCRIPT', img: '/images/pixlabel2/pixlabel8.png', top: '40%', left: '13%' },
  { name: 'SCRATCH BÁSICO', img: '/images/pixlabel2/pixlabel9.png', top: '49%', left: '39%' },
];

export default function MapWithPix() {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-16 px-4">
      {/* Map image */}
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="w-full h-auto block"
      />

      {/* Pix overlays */}
      <div className="absolute inset-0">
        {pixItems.map((pix, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center z-20"
            style={{
              top: pix.top,
              left: pix.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Label */}
            <div
              className="bg-black/70 text-white font-semibold text-center border border-white rounded-lg px-3 py-1 drop-shadow-md whitespace-nowrap"
              style={{
                fontSize: 'clamp(10px, 2.5vw, 16px)',
                maxWidth: '160px',
              }}
            >
              {pix.name}
            </div>

            {/* Pix character image */}
            <Image
              src={pix.img}
              alt={pix.name}
              width={60}
              height={60}
              className="mt-[-8px] w-[clamp(40px,8vw,60px)] h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
