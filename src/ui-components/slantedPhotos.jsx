import Image from "next/image";

import { motion } from "motion/react";

const SlantedPhotos = ({ clockwise, imageSource }) => {
  return (
    <motion.div
      initial={{ width: "10%", opacity: 0, filter: "blur(50px)" }}
      whileInView={{
        width: "100%",
        opacity: 0.5,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
          type: "tween",
        },
      }}
      className={`${
        clockwise
          ? "-rotate-[25deg] rounded-t-[40px]"
          : "rotate-[25deg] rounded-b-[40px]"
      } col-span-1 size-20 md:size-32 bg-gray-200 shadow-2xl p-1 overflow-hidden opacity-50 hover:rotate-0 hover:scale-125 hover:opacity-95 transition-all duration-300 `}
    >
      <Image
        src={imageSource}
        alt="slanted-image"
        width={500}
        height={500}
        quality={100}
        loading="lazy"
        className={`w-full h-full object-cover ${
          clockwise ? "rounded-t-[36px]" : "rounded-b-[36px]"
        }`}
      />
    </motion.div>
  );
};

export default SlantedPhotos;
