'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const pixItems = [
  { name: 'SCRATCHJR', img: '/images/pixlabel2/pixlabel1.png', top: 0.79, left: 0.35 },
  { name: 'SCRATCH INTERMEDIO', img: '/images/pixlabel2/pixlabel2.png', top: 0.57, left: 0.57 },
  { name: 'ALFABETIZACIÓN DIGITAL', img: '/images/pixlabel2/pixlabel3.png', top: 0.82, left: 0.55 },
  { name: 'MAKECODE ARCADE', img: '/images/pixlabel2/pixlabel4.png', top: 0.16, left: 0.62 },
  { name: 'APP INVENTOR', img: '/images/pixlabel2/pixlabel5.png', top: 0.40, left: 0.83 },
  { name: 'HTML & CSS', img: '/images/pixlabel2/pixlabel6.png', top: 0.30, left: 0.32 },
  { name: 'PYTHON', img: '/images/pixlabel2/pixlabel7.png', top: 0.72, left: 0.75 },
  { name: 'JAVASCRIPT', img: '/images/pixlabel2/pixlabel8.png', top: 0.40, left: 0.13 },
  { name: 'SCRATCH BÁSICO', img: '/images/pixlabel2/pixlabel9.png', top: 0.49, left: 0.39 },
];

export default function MapWithPix() {
  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const updateImageSize = () => {
    if (imageRef.current) {
      const img = imageRef.current;
      setImageSize({
        width: img.clientWidth,
        height: img.clientHeight,
      });
    }
  };

  useEffect(() => {
    updateImageSize();
    window.addEventListener('resize', updateImageSize);
    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto my-16 px-4">
      <img
        ref={imageRef}
        src="/map2aa.png"
        alt="Mapa Pix"
        className="w-full h-auto"
        onLoad={updateImageSize}
      />

      {imageSize.width > 0 &&
        pixItems.map((pix, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center z-30"
            style={{
              top: `${pix.top * imageSize.height}px`,
              left: `${pix.left * imageSize.width}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="text-white font-bold text-center border-white border-2 rounded-lg drop-shadow-md px-2 py-1 text-xs sm:text-sm bg-black/70 leading-tight max-w-[120px] whitespace-pre-wrap"
              style={{
                wordBreak: 'break-word',
              }}
            >
              {pix.name}
            </div>
            <Image
              src={pix.img}
              alt={pix.name}
              width={60}
              height={60}
              className="-mt-2"
            />
          </div>
        ))}
    </div>
  );
}
