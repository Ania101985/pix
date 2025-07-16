// components/CourseLabel.jsx
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function CourseLabel({ name, styleClass, x, y, href }) {
  const router = useRouter();

  return (
    <motion.div
      className={`absolute cursor-pointer ${styleClass}`}
      style={{ top: y, left: x }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      onClick={() => router.push(href)}
      whileHover={{ scale: 1.1 }}
    >
      <div className="px-4 py-2 rounded-lg shadow-lg text-white text-sm bg-gradient-to-br from-purple-600 to-pink-500 border-2 border-white uppercase font-bold font-comic">
        {name}
      </div>
    </motion.div>
  );
}
