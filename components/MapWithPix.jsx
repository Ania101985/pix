import Image from "next/image";

const pixItems = [
  { name: "SCRATCHJR", img: "/images/pixlabel2/pixlabel1.png", top: "78%", left: "34%" },
  { name: "SCRATCH INTERMEDIO", img: "/images/pixlabel2/pixlabel2.png", top: "57%", left: "56%" },
  { name: "ALFABETIZACIÓN DIGITAL", img: "/images/pixlabel2/pixlabel3.png", top: "82%", left: "53%" },
  { name: "MAKECODE ARCADE", img: "/images/pixlabel2/pixlabel4.png", top: "16%", left: "62%" },
  { name: "APP INVENTOR", img: "/images/pixlabel2/pixlabel5.png", top: "40%", left: "83%" },
  { name: "HTML & CSS", img: "/images/pixlabel2/pixlabel6.png", top: "30%", left: "32%" },
  { name: "PYTHON", img: "/images/pixlabel2/pixlabel7.png", top: "72%", left: "74%" },
  { name: "JAVASCRIPT", img: "/images/pixlabel2/pixlabel8.png", top: "40%", left: "14%" },
  { name: "SCRATCH BÁSICO", img: "/images/pixlabel2/pixlabel9.png", top: "48%", left: "39%" },
];

export default function MapWithPix() {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4">
      <div className="relative w-full pt-[125%]"> {/* Keeps 4:5 aspect ratio */}
        <Image
          src="/map2aa.png"
          alt="Mapa Pix"
          fill
          style={{ objectFit: "contain" }}
          className="z-10"
        />

        {pixItems.map((pix, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center z-20"
            style={{
              top: pix.top,
              left: pix.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="text-white font-bold text-center border-white border-2 rounded-lg drop-shadow-md px-2 py-1 text-xs sm:text-sm bg-black/70 max-w-[130px] leading-tight"
            >
              {pix.name}
            </div>
            <Image
              src={pix.img}
              alt={pix.name}
              width={70}
              height={70}
              className="-mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
