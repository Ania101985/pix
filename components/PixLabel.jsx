// components/PixLabel.jsx
import Image from "next/image";

export default function PixLabel({ text = "SCRATCHJR", x = "20%", y = "70%" }) {
  return (
    <div
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-[250px] h-[180px]">
        <Image
          src="/pix1.png" // Asegúrate que pix1.png esté en public/
          alt="Pix con cartel"
          fill
          className="object-contain"
        />
        <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-xs px-2">
          {text}
        </div>
      </div>
    </div>
  );
}
