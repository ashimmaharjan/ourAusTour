"use client";

import { motion } from "motion/react";
import Image from "next/image";

const PersonCard = ({ name, image, index }) => {
  return (
    <div className="col-span-1 w-full h-auto flex justify-center items-center">
      <motion.div
        initial={{ scale: 0, filter: "blur(50px)" }}
        // viewport={{ once: true }}
        whileInView={{
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "tween",
            duration: 0.3,
            delay: 0.05 + index * 0.06,
          },
        }}
        whileHover={{
          scale: 1.1,
          rotate: "5deg",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            duration: 0.3,
            delay: 0,
          },
        }}
        className="w-full md:w-[85%] h-auto aspect-square border-[3px] md:border-[5px] rounded-xl md:rounded-3xl border-gray-300 overflow-hidden drop-shadow-2xl relative"
      >
        <Image
          width={800}
          height={800}
          quality={100}
          loading="lazy"
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-2 left-0 w-full h-auto flex justify-center items-center">
          <div className="glassmorphism w-[93%] h-10 md:h-16 flex justify-center items-center border-[1.5px] border-gray-300 rounded-md md:rounded-2xl">
            <h6 className="text-xs md:text-lg font-semibold text-slate-800 text-center">
              {name}
            </h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PersonCard;
