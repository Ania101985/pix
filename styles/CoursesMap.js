import Image from 'next/image';
import mapImage from '../public/map2aa.png'; // your actual map file
import '../styles/MapContainer.css';

const labels = [
  {
    name: "SCRATCH BÁSICO",
    x: "39%",
    y: "49%",
  },
  {
    name: "SCRATCH INTERMEDIO",
    x: "57%",
    y: "57%",
  },
  {
    name: "PYTHON",
    x: "75%",
    y: "72%",
  },
  {
    name: "MAKECODE ARCADE",
    x: "62%",
    y: "16%",
  },
  {
    name: "APP INVENTOR",
    x: "83%",
    y: "40%",
  },
  {
    name: "SCRATCHJR",
    x: "35%",
    y: "79%",
  },
  {
    name: "ALFABETIZACIÓN DIGITAL",
    x: "55%",
    y: "82%",
  },
  {
    name: "JAVASCRIPT",
    x: "13%",
    y: "40%",
  },
  {
    name: "HTML & CSS",
    x: "32%",
    y: "30%",
  },
];

export default function CoursesMap() {
  return (
    <div className="map-container my-16">
      <Image
        src={mapImage}
        alt="Pix Map"
        className="map-image"
        priority
      />
      {labels.map(({ name, x, y }) => (
        <div
          key={name}
          style={{ left: x, top: y }}
          className="label"
        >
          {name}
          <img src="/images/pix.png" alt="Pix" className="pix-icon" />
        </div>
      ))}
    </div>
  );
}
