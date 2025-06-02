import Image from "next/image";

import { motion } from "motion/react";

const SlantedPhotos = ({ clockwise, imageSource, index }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 0.65,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.2 + index * 0.1,
        },
      }}
      whileHover={{
        opacity: 0.85,
      }}
      className={`${
        clockwise ? "-rotate-[25deg]" : "rotate-[25deg]"
      } col-span-1 size-16 md:size-24 lg:size-32 bg-gray-200 rounded-full shadow-2xl p-1 overflow-hidden`}
    >
      <Image
        src={imageSource}
        alt="slanted-image"
        width={800}
        height={800}
        quality={100}
        loading="lazy"
        className="object-cover rounded-full w-full h-full overflow-hidden"
      />
    </motion.div>
  );
};

export default SlantedPhotos;
