import Image from "next/image";

const pixItems = [
  {
    name: "SCRATCHJR",
    img: "/images/pixlabel2/pixlabel1.png",
    style: { top: "79%", left: "35%" },
  },
  {
    name: "SCRATCH INTERMEDIO",
    img: "/images/pixlabel2/pixlabel2.png",
    style: { top: "57%", left: "57%" },
  },
  {
    name: "ALFABETIZACIÓN DIGITAL",
    img: "/images/pixlabel2/pixlabel3.png",
    style: { top: "82%", left: "55%" },
  },
  {
    name: "MAKECODE ARCADE",
    img: "/images/pixlabel2/pixlabel4.png",
    style: { top: "16%", left: "62%" },
  },
  {
    name: "APP INVENTOR",
    img: "/images/pixlabel2/pixlabel5.png",
    style: { top: "40%", left: "83%" },
  },
  {
    name: "HTML & CSS",
    img: "/images/pixlabel2/pixlabel6.png",
    style: { top: "30%", left: "32%" },
  },
  {
    name: "PYTHON",
    img: "/images/pixlabel2/pixlabel7.png",
    style: { top: "72%", left: "75%" },
  },
  {
    name: "JAVASCRIPT",
    img: "/images/pixlabel2/pixlabel8.png",
    style: { top: "40%", left: "13%" },
  },
  {
    name: "SCRATCH BÁSICO",
    img: "/images/pixlabel2/pixlabel9.png",
    style: { top: "49%", left: "39%" },
  },
];

export default function MapWithPix() {
  return (
    <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] lg:aspect-[3/2] overflow-hidden font-sans my-16">
      <img
        src="/map2aa.png"
        alt="Mapa Pix"
        className="w-full h-full object-contain"
      />

      {pixItems.map((pix, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center z-30"
          style={{
            top: pix.style.top,
            left: pix.style.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Course Label */}
          <div
            className="flex items-center justify-center text-white font-bold text-center border-white border-[2px] rounded-lg drop-shadow-lg px-2 py-1 leading-tight text-xs sm:text-sm md:text-base max-w-[160px] bg-black/70"
          >
            {pix.name}
          </div>

          {/* Pix Image */}
          <Image
            src={pix.img}
            alt={pix.name}
            width={100}
            height={100}
            className="-mt-2"
          />
        </div>
      ))}
    </div>
  );
}
