import CourseLabel from "@/components/CourseLabel";
import { styleMap } from "@/utils/styleMap";

export default function Mapa() {
  const cursos = [
    { name: "SCRATCH BÁSICO", x: "22%", y: "17%", route: "/scratch-basico" },
    { name: "APP INVENTOR", x: "33%", y: "19%", route: "/appinventor" },
    { name: "SCRATCH INTERMEDIO", x: "20%", y: "34%", route: "/scratch-intermedio" },
    { name: "ALFABETIZACIÓN DIGITAL", x: "29%", y: "54%", route: "/alfabetizacion" },
    { name: "SCRATCHJR", x: "51%", y: "82%", route: "/scratchjr" },
    { name: "MAKECODE ARCADE", x: "52%", y: "37%", route: "/makecode" },
    { name: "HTML & CSS", x: "70%", y: "28%", route: "/html-css" },
    { name: "JAVASCRIPT", x: "87%", y: "36%", route: "/javascript" },
    { name: "PYTHON", x: "81%", y: "58%", route: "/python" },
    { name: "INTELIGENCIA ARTIFICIAL", x: "64%", y: "61%", route: "/ia" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden font-comic">
      <img
        src="/map2.jpg"
        alt="mapa"
        className="w-full h-full object-cover"
      />
      {cursos.map((curso, index) => (
        <CourseLabel
          key={index}
          name={curso.name}
          x={curso.x}
          y={curso.y}
          style={styleMap[curso.name]}
          route={curso.route}
        />
      ))}
    </div>
  );
}
