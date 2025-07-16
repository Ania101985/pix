import Image from 'next/image';

const pixItems = [
  // same array as before
];

export default function MapWithPix() {
  return (
    <div className="relative w-full h-[100dvh] sm:h-[calc(100vh-80px)] overflow-auto sm:overflow-hidden font-sans">
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
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

          <Image
            src={pix.img}
            alt={pix.name}
            width={80}
            height={80}
            className="mt-[-8px] sm:w-[100px] sm:h-[100px]"
          />
        </div>
      ))}
    </div>
  );
}
